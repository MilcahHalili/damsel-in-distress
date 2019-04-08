import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
        <Link className={styles.NavLink} to='/login'>LOGIN</Link>
        <Link className={styles.NavLink} to='/signup'>SIGN UP</Link>
        <Link className={styles.NavLink} to='/about'>ABOUT</Link>
        </div>
    )
}

export default NavBar;