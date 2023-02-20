import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.svg';

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <ul>
                <Link to='/Camps-App/'><img src={logo} alt=""/></Link>
            </ul>
        </nav>  
    </>
  )
}

export default Navbar