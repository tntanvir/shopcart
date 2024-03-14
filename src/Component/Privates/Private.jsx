// import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { contextAPI } from '../../App';

const Private = ({ childern }) => {
    const location = useLocation()
    const { userLogin, setUserLogin } = useContext(contextAPI);
    return (

        userLogin.email ? childern : <Navigate to="/login" replace state={{ from: location }} />

    );
};

export default Private;