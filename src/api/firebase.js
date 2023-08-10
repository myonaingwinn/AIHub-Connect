import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { getFirebaseConfig } from "@/utils/env";
import { MAX_COUNT } from "@/utils/types";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

export async function saveUser(userObject) {
  const existingUsers = await getUser(userObject);

  if (existingUsers.size === 0) {
    // If the user doesn't exist, add them to the 'users' collection
    try {
      userObject.max_count = MAX_COUNT;
      const docRef = await addDoc(usersCollection, userObject);

      console.log("User added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  } else {
    console.log("User already exists:", existingUsers.docs[0].id);
  }
}

export async function updateUser(userObject, maxCount) {
  console.log('🚀 ~ file: firebase.js:37 ~ updateUser ~ maxCount:', userObject, maxCount)
  const user = getUser(userObject);
  if (user.max_count[maxCount] > 0)
    console.log("user.max_count[maxCount]", user.max_count[maxCount]);
}

export async function getUser(userObject) {
  const usersQuery = query(
    usersCollection,
    where("email", "==", userObject.email),
  );
  const existingUser = await getDocs(usersQuery);

  return existingUser;
}
