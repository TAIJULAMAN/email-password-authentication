import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css' 

const Header = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/resister">Resister</Link>
        <Link to="/resister-rbs">Resister-RBS</Link>
        <Link to="/resister-bs">Resister-BS</Link>
        </nav>
    );
};

export default Header;