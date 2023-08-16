import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore/lite";
import { getFirebaseConfig } from "@/utils/env";
import { MAX_COUNT_VALUES } from "@/utils/types";
import { useAppStore } from "@/store/app";

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

export async function saveUser(userObj) {
  const userQuery = query(usersCollection, where("email", "==", userObj.email));

  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) {
    userObj.login_count = 1;
    userObj.max_count = MAX_COUNT_VALUES;

    const userDocRef = doc(usersCollection);
    await setDoc(userDocRef, userObj);
    // console.log("User saved successfully");
  } else {
    // console.log("User already exists");
    const userDoc = querySnapshot.docs[0];
    const userDocRef = doc(usersCollection, userDoc.id);

    // Update the login count property
    await updateDoc(userDocRef, { login_count: increment(1) });
    // console.log("Login count updated");
  }

  await getUserAndSaveToLocal(userObj.email);
}

// Function to get a user by their email
export async function getUser(email) {
  const userQuery = query(usersCollection, where("email", "==", email));

  const querySnapshot = await getDocs(userQuery);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
  } else {
    // console.log("User not found");
    return null;
  }
}

// Function to update a user by their email
export async function updateUser(email, countType) {
  const userData = await getUser(email);

  if (userData && userData.max_count && userData.max_count[countType] > 0) {
    const newCount = userData.max_count[countType] - 1;

    const userDocRef = doc(usersCollection, userData.id);

    // Update the specific count property in the user's document
    await updateDoc(userDocRef, {
      ["max_count." + countType]: newCount,
    });

    // Get user and save to local
    await getUserAndSaveToLocal(email);

    // console.log(`User's ${countType} count updated successfully`);
  } /* else {
    console.log(`User's ${countType} count is already 0 or less`);
  } */
}

export async function getUserAndSaveToLocal(email) {
  const appStore = useAppStore();
  const user = await getUser(email);
  appStore.setUser(user);
}

export async function isValidToRequest(countType) {
  const userData = await getUser(getUserEmail());
  return userData.max_count[countType] > 0;
}

export function getUserEmail() {
  const appStore = useAppStore();
  return appStore.user.email;
}
