import React from 'react'

import Menu from './Menu'
import SideMenu from './SideMenu';

import { logoLarge } from '../assets/images';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { styled } from '@mui/system'


const Navbar = () => {
    const toggleNavbar = () => {
        document.body.classList.toggle('sideBar')
    }


    const LoginButton = styled(Button)({
        color: '#FFFFFF',
        borderRadius: '20px',
        width: '97px',
        height: '40px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '17px',
        fontWeight: 'normal',

        '&:hover': {
            color: '#1d7a8c',
            backgroundColor: '#FFFFFF',
        }
    })

    const HelperButton = styled(Button)({
        color: '#FFFFFF',
        borderRadius: '20px',
        width: '161px',
        height: '40px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '17px',
        fontWeight: 'normal',

        '&:hover': {
            color: '#1d7a8c',
            backgroundColor: '#FFFFFF',
        }
    })

    return (

        <nav className='navbar'>
            <img className='logo' src={logoLarge} alt="Helperland" />
            <div>
                <ul className='navbar-list'>
                    <li> <Link to='' className='link-navItem'>Book a Cleaner</Link> </li>
                    <li> <Link to='/prices' className='normal-navItem'>Prices</Link> </li>
                    <li> <Link to='/' className='normal-navItem'>Our Guarantee</Link> </li>
                    <li> <Link to='/' className='normal-navItem'>Blog</Link> </li>
                    <li><Link to='/contact' className='normal-navItem'>Contact us</Link> </li>
                    <li>
                        <LoginButton>Login</LoginButton>
                    </li>
                    <li>
                        <Link to='/become-a-pro' className='helper-button'>
                            <HelperButton>Become a Helper</HelperButton>
                        </Link>
                    </li>
                    <li>
                        <Menu />
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className='sideMenu'>
                <SideMenu />
            </div>
        </nav >
    )
}

export default Navbar

