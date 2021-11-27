import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getIdToken, getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import InitializeFirebase from '../Firebase/Firebase.init';
InitializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const GoogleSignIn = () => {
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider).finally(() => {
            setIsLoading(false)
        })

    }

    const register = (email, pass, name) => {

        createUserWithEmailAndPassword(auth, email, pass);
        
            .then((userCredential) => {
            setUser(user);
            saveUser(email, displayName);
        })

    }

const LogOut = () => {
    setIsLoading(true)
    signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => {
            setIsLoading(false)
        })
}

const saveUser = (email, displayName) => {
    const user = { email, displayName }

    fetch('server link...',{
        // method:"POST"...........
    })

}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            getIdToken(user)
                .then(idToken => localStorage.setItem("idToken", idToken))
        }
        else {
            setUser({})
        }
        setIsLoading(false)
    });
    return () => unsubscribe;
}, [auth])

return {
    user,
    GoogleSignIn,
    LogOut,
    isLoading,
};
};

export default useFirebase;