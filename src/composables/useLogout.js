import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const logout = async () => {
  error.value = null;
  isPending.value = true;

  try {
    await signOut(auth);

    error.value = null;
    isPending.value = false;
    // console.log("User signed out");
  } catch (err) {
    // console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return { error, isPending, logout };
};

export default useLogout;
