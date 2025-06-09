// import {collection, addDoc}
import { firebaseApp, db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addNewDoc = async (doc) => {
    error.value = "";

    try {
      const docRef = await addDoc(collection(db, collectionName), doc);
      // console.log(docRef);
    } catch (err) {
      // console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, addNewDoc };
};

export default useCollection;
