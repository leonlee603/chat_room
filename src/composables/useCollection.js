// import {collection, addDoc}
import { firebaseApp, db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (collectionName) => {
  const error = ref(null);
  const isPending = ref(false);

  const addNewDoc = async (doc) => {
    error.value = "";
    isPending.value = true;

    try {
      const docRef = await addDoc(collection(db, collectionName), doc);
      error.value = null;
      isPending.value = false;
      // console.log(docRef);
    } catch (err) {
      // console.log(err.message);
      error.value = "Could not send the message";
      isPending.value = false;
    }
  };

  return { error, isPending, addNewDoc };
};

export default useCollection;
