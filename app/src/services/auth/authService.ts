import { getAuth, User } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import validator from 'validator';

const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        return userCredential.user;
    }
    catch (error) {
        throw error;
    }
}

const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        if (validator.isEmail(email) === true && password != null) {
            const userCredential: any = await signInWithEmailAndPassword(email, password)
            return userCredential.user
        }
    }
    catch (error) {
        throw error;
    }
}

export default {
    registerUser,
    signInWithEmailAndPassword
}