import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const logwithGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, GoogleProvider);


    }
    const loginwithGithub = () => {
        setloading(true);
        return signInWithPopup(auth, GithubProvider);

    }
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginwithEmailandPassword = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setloading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           setUser(currentUser);
           console.log('current user is ', currentUser)
            setloading(false);
        })
        return ()=>{
           return unsubscribe(); 
        };
    },[])

    const authinfo = {
        user,
        loading,
        logwithGoogle,
        loginwithGithub,
        createUser,
        loginwithEmailandPassword,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;