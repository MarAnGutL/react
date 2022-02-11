import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { finInicio } from '../../actions/auth';
import { BuscadorPta } from '../search/BuscadorPta';


export const Navbar = () => {

    const dispatch = useDispatch();
    const { displayName } = getAuth().currentUser;

    const handleLogout = () => {
        dispatch(finInicio());
        // console.log('fuera');
    };


    return (
        <div>
        <nav className="navbar navbar-expand-sm navbar-light " style={{ backgroundColor: "#07DECC" }}>

            <div>
                <span className="navbar-brand active">{displayName}</span>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        onClick={handleLogout}
                        className="nav-item nav-link"
                        to="/login"
                        >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    </div>
    )
}
