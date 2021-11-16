import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebaseInitialize";

// Initialize Firebase APP 
firebaseInitialize();
// ------------------------------

const useFirebse = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history, method) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          history.push('/')
          const newUser = {email, displayName:name}
          setUser(newUser);
          // Save user to DB 
          saveUser(email, name, "POST");

          // Send name to firebase after creation 
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            setAuthError('')
          }).catch((error) => {
            setAuthError(error.message);   
          });
        })
        .catch((error) => {
          setAuthError(error.message);        
        })
        .finally(()=>setIsLoading(false));
    }

    const loginUser =(email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const destination = location?.state?.from || '/';
          history.replace(destination);
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
              setAuthError('')
              window.location.assign('/');
          }).catch((error) => {
            setAuthError(error.message);
          })
        .finally(()=>setIsLoading(false));
    }

    const loginWithGoogle = (location, history) =>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('')
        saveUser(user.email, user.displayName, 'PUT')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
    
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName}

        fetch('https://thawing-tor-57287.herokuapp.com/users',{
          method: method,
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
    }

    // data load for make admim 
    useEffect(()=>{
      fetch(`https://thawing-tor-57287.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data => setAdmin(data.admin))
    },[user?.email])

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
    },[auth])

    // -----------------------------------------
    

    return {user, admin, registerUser, logOut, loginUser, isLoading, authError, loginWithGoogle }
}

export default useFirebse;