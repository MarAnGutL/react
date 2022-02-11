import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { Registro } from '../components/login/Registro'

export const AuthLogin = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='registro' element={<Registro/>}/>
            </Routes>
        </>
    )
}
