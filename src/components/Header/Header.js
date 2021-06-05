import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Carousel from '../Carousel/Carousel';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header" >
            <div className="logos">
            <h3 className="banner">Online Shopping System</h3>
            </div>
           <Carousel></Carousel>
            <nav className='mt-5'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">{loggedInUser.name}</Link>
            </nav>
        </div>
    );
};

export default Header;