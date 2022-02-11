import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { incioLoginEmailPassword} from '../../actions/auth';

import { useForm } from '../../hook/useForm';
import '../login/login.css'



export const Login = () => {
    
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.Ui)

    const [ formValues, handleInputChange] = useForm({
        email: 'mar@mail.com',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(email, password);
        dispatch(incioLoginEmailPassword(email, password));
    };
    
    return (
        <div className="login-page">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="email"
                        name="email"
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                        autoComplete='off'
                        value={password}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        disabled={loading}
                    >Entrar
                    </button>

                {/**crear link para nueva cuenta */}
                <Link 
                    to='/auth/registro'
                    className='link'
                >
                    crear cuenta
                </Link>
                </form>
            </div>
        </div>
    );
};
