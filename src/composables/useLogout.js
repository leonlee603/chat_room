import {  signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await signOut(auth);

    error.value = null;

    // console.log("User signed out");
  } catch (err) {
    // console.log(err.message);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
