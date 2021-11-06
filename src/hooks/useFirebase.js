import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebaseInitialize";

// Initialize Firebase APP 
firebaseInitialize();
// ------------------------------

const useFirebse = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (email, password) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;        
        })
        .finally(()=>setIsLoading(false));
    }

    const loginUser =(email, password) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    }


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
        .finally(()=>setIsLoading(false));
    }

    // Observe User State 
    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });

          return ()=> unSubscribed;
    },[])

    // -----------------------------------------
    

    return {user, registerUser, logOut, loginUser, isLoading }
}

export default useFirebse;