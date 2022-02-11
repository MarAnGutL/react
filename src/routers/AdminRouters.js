import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/screen/NavBar'
import { PrincipalScreen } from '../components/screen/PrincipalScreen'
import { BuscadorPta } from '../components/search/BuscadorPta'

export const AdminRouters = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<PrincipalScreen />} />
                <Route path='/buscador' element={<BuscadorPta />} />
            </Routes>
        </>
    )
}
