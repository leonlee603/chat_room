import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "@/firebase/config";
import { ref } from "vue";

const auth = getAuth(firebaseApp);
const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  // console.log("User state change. Current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
