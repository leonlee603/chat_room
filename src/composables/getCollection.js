import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  const q = query(collection(db, collectionName), orderBy("createdAt", "asc"));

  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      // console.log("snapshot");
      let results = [];
      querySnapshot.docs.map((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
