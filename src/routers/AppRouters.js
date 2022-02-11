import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Login } from '../components/login/Login';
// import { Registro } from '../components/login/Registro';
import { getAuth, onAuthStateChanged } from '@firebase/auth';


import { AdminRouters } from './AdminRouters';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { AuthLogin } from './AuthLogin';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';




export const AppRouters = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [checking, setChecking] = useState(true);

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            // setChecking(false);
            // console.log(user);
        })
    }, [dispatch, setIsLoggedIn]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoute isAuth={isLoggedIn}>
                        <AuthLogin/>
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute isAuth={isLoggedIn}>
                        <AdminRouters/>
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
};
