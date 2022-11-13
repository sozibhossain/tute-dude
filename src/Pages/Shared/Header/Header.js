import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className='header-logo'>
                <NavLink to="/"><img src={Logo} alt=''/></NavLink>
            </div>
            <div className='header-menu-area'>
                <NavLink className='header-menu' style={({ isActive }) =>
                      isActive
                        ? {color: '#800080'}
                        : 
                        { color: 'rgba(128, 0, 128, 0.25)'}
                    }
                    to="/My-assignment"
                >My Assignment</NavLink>
                <NavLink className='header-menu' style={({ isActive }) =>
                      isActive
                        ? {color: '#800080'}
                        : 
                        { color: 'rgba(128, 0, 128, 0.25)'}
                    }
                    to="/Chat-with-Mentor"
                >Chat with Mentor</NavLink>
                <NavLink className='header-menu' style={({ isActive }) =>
                      isActive
                        ? {color: '#800080'}
                        : 
                        { color: 'rgba(128, 0, 128, 0.25)'}
                    }
                    to="/ProfileName"
                ><FaUserCircle className='ProfileName-icon'/>ProfileName <FaChevronDown/></NavLink>
            </div>

            {/* mobile-menu-area */}

            <div className='mobile-menu-area'>
                
                <NavLink className='dropdown-menu-list' style={({ isActive }) =>
                      isActive
                        ? {color: '#800080'}
                        : 
                        { color: 'rgba(128, 0, 128, 0.25)'}
                    }
                    to="/ProfileName"
                ><FaUserCircle className='ProfileName-icon'/>ProfileName <FaChevronDown/></NavLink>

                <div className='dropdown-menu'>
                    <NavLink className='mobile-menu' style={({ isActive }) =>
                        isActive
                            ? {color: '#800080'}
                            : 
                            { color: 'rgba(128, 0, 128, 0.25)'}
                        }
                        to="/My-assignment"
                    >My Assignment</NavLink>
                    <NavLink className='mobile-menu' style={({ isActive }) =>
                        isActive
                            ? {color: '#800080'}
                            : 
                            { color: 'rgba(128, 0, 128, 0.25)'}
                        }
                        to="/Chat-with-Mentor"
                    >Chat with Mentor</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Header;