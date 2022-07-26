import React, { Children } from 'react';
import useAuth from '../../hooks/useAuth';
import {useLocation, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();

    const location  = useLocation()
    if(isLoading){
        return <Spinner animation='border' variant='primary'></Spinner>
    }
    if(!user.displayName){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children
};

export default PrivateRoute;