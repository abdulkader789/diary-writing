import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/Navbar.css';

const NavBar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMenuClick = () => {
        if (isMenuVisible) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const openMenu = () => {

    };

    const closeMenu = () => {

    };

    return (
        <nav className="navbar">
            <div className="data-container">
                <h2 className=' text-white text-2xl'>
                    <span className='text-green-400 uppercase nav-text'>DiaryWriting
                    </span> <span className='nav-log'>- Write Your Day</span></h2>
                <div id="menu-time" className={`menu-data animate__animated ${isMenuVisible ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                    <button onClick={closeMenu} className='text-white close'>
                        <FontAwesomeIcon icon={faTimes} className='size fa-solid fa-xmark' />

                    </button>
                    <Link to="/home">Home</Link>
                    <Link to="/create">Create Project</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
                <button id="Menu-bar" className='text-white Menu-bar ' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} className='size-icon fa-solid fa-bars' />

                </button>
            </div>
        </nav>
    );
};

export default NavBar;
