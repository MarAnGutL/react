import '../firebase/configuracion';
import 'firebase/auth'
import { types } from "../types/types";
import { getAuth, createUserWithEmailAndPassword, 
            signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import Swal from 'sweetalert2';
import {finishLoading, startLoading } from './ui';

export const incioLoginEmailPassword = (email,password) => {
    return (dispatch) => {

        dispatch(startLoading());
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                localStorage.setItem("tokenU", user.stsTokenManager.refreshToken);
                console.log(user);
                dispatch(finishLoading());
            }).catch(e => {
                console.log(e);
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            })
    }
};


export const iniciaRegistroEmailPswdNombre = (email, password, nombre) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({user}) =>{
                // user.displayName = nombre;
                await updateProfile(auth.currentUser,{displayName: nombre});
                dispatch(login(user.uid, user.displayName))
                // console.log(user);
            }).catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
        })
    }
} 

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};


export const finInicio = () => {
    return async(dispatch) => {
        const auth = getAuth();
        await auth.signOut();
        
        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}