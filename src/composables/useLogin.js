import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!userCredential) {
      throw new Error("Could not complete the signup");
    }

    error.value = null;
    isPending.value = false;

    const user = userCredential.user;
    // console.log(user);

    return userCredential;
  } catch (err) {
    // Handle errors based on err.code
    console.log(err.code);
    switch (err.code) {
      case "auth/invalid-email":
        error.value = "Invalid email address.";
        break;
      case "auth/user-disabled":
        error.value = "User account has been disabled.";
        break;
      case "auth/missing-email":
        error.value = "No user found with this email.";
        break;
      case "auth/wrong-password":
        error.value = "Incorrect password.";
        break;
      default:
        error.value = "Failed to sign in. Please try again.";
    }
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
