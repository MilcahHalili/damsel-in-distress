import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

const NavBar = (props) => {
    return (
        props.user ? 
        <div className={styles.NavBar}>
            <Link className={styles.NavLink} to='' onClick={props.handleLogout}>LOGOUT</Link>
            <Link className={styles.NavLink} to='/about'>ABOUT</Link>
            <span className={styles.NavWelcome}>WELCOME, {props.user.name}</span>
        </div>
        :
        <div className={styles.NavBar}>
           <Link className={styles.NavLink} to='/login'>LOGIN</Link>
           <Link className={styles.NavLink} to='/signup'>SIGN UP</Link>
       </div>
    )
}

export default NavBar;