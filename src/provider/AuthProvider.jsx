import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);


 const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

useEffect( () =>{
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log('user in the use state changed');
    setUser(currentUser);
    setLoading(false)
  })
  return () =>{
  unSubscribe();
  } 
    
}, [])

const logOut = () =>{
  setLoading(true)
  return signOut(auth);
}

  const userInfo = {user, loading, createUser, signInUser, logOut}
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;