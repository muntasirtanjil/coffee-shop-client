import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import app from '../firebase/fitebase.init';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };




    const userInfo = {
        register,
        singIn,

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;