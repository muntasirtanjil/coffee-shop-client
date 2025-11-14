import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/fitebase.init';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        register
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;