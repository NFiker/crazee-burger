import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (userId) => {
  // const docref = doc(CHEMIN)
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);
  console.log("docSnapshot: ", docSnapshot);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = (userId) => {
  // CACHETTE
  const docRef = doc(db, "users", userId);

  // NOURRITURE
  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };

  // setDoc(CACHETTE, NOURRITURE);
  setDoc(docRef, newDoc);
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);

  if (!existingUser) {
    createUser(userId);
  }
};
