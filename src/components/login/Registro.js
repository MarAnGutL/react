import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { iniciaRegistroEmailPswdNombre } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hook/useForm';
import '../login/login.css'


export const Registro = () => {

    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.Ui);
    

    const [formValues, handleInputChange] = useForm({
        nombre: 'amayrani',
        email: 'amayrani@mail.com',
        password: '123456',
        password2: '123456'
    });

    const {nombre, email, password, password2} = formValues;
    
    const handleRegistro = (e) => {
        e.preventDefault();
        if(formularioCorrecto()){
            dispatch(iniciaRegistroEmailPswdNombre(email, password, nombre))
            console.log(nombre, email, password, password2);
        }
    };

    const formularioCorrecto = () => {
        if(nombre.trim().length === 0){
            dispatch(setError('nombre requerido'));
            return false;
        } else if(!validator.isEmail(email)){
            dispatch(setError("email icorrecto"));
            return false;
        }else if(password !== password2 || password.length < 5){
            dispatch(setError('la contraseña es muy corta, minimo 6 caracteres'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div className="login-page">
            <div className="form">
                <h2>Registro</h2>
                <form className="login-form" onSubmit={handleRegistro}>
                    
                {   
                    msgError &&
                    (<div className='auth-alert-error'>
                        {msgError}
                    </div>
                    )
                }

                    <input 
                        type="text" 
                        placeholder="nombre"
                        name="nombre"
                        autoComplete='off'
                        value={nombre}
                        onChange={handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password" 
                        placeholder="password"
                        name="password2"
                        autoComplete="off"
                        value={password2}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                    >
                        Registrar</button>

                    <Link 
                    to='/auth/login'
                    className='link'
                >
                    Inicion secion
                </Link>

                </form>
            </div>
        </div>
    );
};
