import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    // Create the user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!userCredential) {
      throw new Error("Could not complete the signup");
    }

    // Update user's profile
    const user = userCredential.user;
    await updateProfile(user, {
      displayName,
    });

    error.value = null;
    // console.log(user);

    console.log("user signed up");

    return userCredential;
  } catch (err) {
    // Handle errors based on err.code
    switch (err.code) {
      case "auth/email-already-in-use":
        error.value = "Email already in use.";
        break;
      case "auth/invalid-email":
        error.value = "Invalid email address.";
        break;
      case "auth/weak-password":
        console.log("yes");
        error.value = "Password should be at least 6 characters.";
        break;
      default:
        error.value = "Failed to register. Please try again.";
    }
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
