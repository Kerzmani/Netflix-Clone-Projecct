
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyC2ETdg5q1neWgh79GTAdLJcwurTHtrL-M",
  authDomain: "netflix-clone-b989b.firebaseapp.com",
  projectId: "netflix-clone-b989b",
  storageBucket: "netflix-clone-b989b.firebasestorage.app",
  messagingSenderId: "752374159230",
  appId: "1:752374159230:web:5d61dfa61c1bf6e418852f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
     toast.error( error.code.split("/")[1].split("-").join(" "));
  }

}


const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const logout = () => {
  signOut(auth);
}
export { auth, db, signup, login, logout };