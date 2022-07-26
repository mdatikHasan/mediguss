import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firbase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
                .finally(()=> setIsLoading(false))
    };

    useEffect(()=> {
        const  unSubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading(false))
    };

    //start 
    
    // end

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;