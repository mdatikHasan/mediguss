import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [gUser, setGUser] = useState({})
    const { signInUsingGoogle } = useAuth();
    console.log(gUser);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setGUser(result.user)
            })
    }

    
    useEffect(() => {
        if (gUser?.displayName) {
            navigate(from, { replace: true })
        }
    }, [from, gUser, navigate])

    return (
        <div>
            <h2 className='mb-5'>Please Login</h2>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;