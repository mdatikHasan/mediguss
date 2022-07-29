import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './NavBar.css'

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid mx-4">
                <NavLink to='/' className='mx-3 '><img className='logo' src="https://tf.quomodosoft.com/mediguss/wp-content/themes/mediguss/assets/images/logo/logo1.png" alt="MediGuss" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className='mx-3 linkItem'>Home</NavLink>
                            <NavLink to='/services' className='mx-3 linkItem'>Services</NavLink>
                            <NavLink to='/medicine' className='mx-3 linkItem'>Medicine</NavLink>
                            <NavLink to='/about' className='mx-3 linkItem'>About</NavLink>
                            {
                                user?.displayName ? <NavLink to='/login' onClick={logOut}><span><i className="fa-solid fa-right-from-bracket"></i></span> Log Out</NavLink> : <NavLink to='/login' className='mx-3 linkItem'><span><i className="fa-solid fa-down-to-bracket"></i></span> Login</NavLink>
                            }
                            
                            
                            <span className='ms-5 fs-4 text-danger'><b> {user?.displayName? <i className="fa-solid fa-user-check"></i> : <i></i>}{user.displayName}</b></span>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;