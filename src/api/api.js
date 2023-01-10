import axios from "axios";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  doc,
  query,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage();
const storageRef = ref(storage, "avatar-1");

export const signInAsAdmin = async (userName, passWord) => {
  const querySnapshot = await getDocs(collection(db, "admin"));
  const listAdminAccount = [];
  querySnapshot.forEach((doc) => {
    listAdminAccount.push(doc.data());
  });
  return listAdminAccount.some(
    (account) => account.password === passWord && account.username === userName
  );
};

export const uploadFileAvatar = async (name, file, cb) => {
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/" + name + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // eslint-disable-next-line default-case
      switch (snapshot.state) {
        case "success":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // eslint-disable-next-line default-case
      switch (error.code) {
        case "storage/unauthorized":
          break;
        case "storage/canceled":
          break;
        case "storage/unknown":
          break;
      }
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      cb(downloadURL);
    }
  );
};

export const getListUser = async () => {
  const querySnapshot = await getDocs(collection(db, "listUser"));
  const listUser = [];
  querySnapshot.forEach((doc) => {
    listUser.push({ ...doc.data(), id: doc.id });
  });
  console.log("listUser", listUser);
  return listUser;
};

export const addUser = async (user) => {
  const docRef = await addDoc(collection(db, "listUser"), {
    ...user,
    create_at: serverTimestamp(),
  });
  return docRef.id;
};

export const isUserRegister = async (username) => {
  const q = await query(
    collection(db, "listUser"),
    where("username", "==", username)
  );
  const querySnapshot = await getDocs(q);
  const listUser = [];
  querySnapshot.forEach((doc) => {
    listUser.push({ ...doc.data(), id: doc.id });
  });
  return !!listUser.length;
};

export const updateUser = async (id, field) => {
  const listUserRef = doc(db, "listUser", id);
  const res = await updateDoc(listUserRef, field);
  console.log("res", res);
};
