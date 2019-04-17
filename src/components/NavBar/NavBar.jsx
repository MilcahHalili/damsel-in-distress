import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { FaBell, FaArrowLeft } from 'react-icons/fa'

import styles from './NavBar.module.css'

class NavBar extends Component {
    render(){
        return (
            this.props.user ? 
            <div className={styles.NavBarUser}>
                <span>
                    <Link className={styles.NavLogout} to='' onClick={this.props.handleLogout}>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle', color:'#5a6c87' } }}>
                    <FaArrowLeft />
                    &nbsp;
                    </IconContext.Provider>
                    logout
                    </Link>
                    &nbsp; &nbsp; &nbsp; 
                </span>
                <div>
                    <Link to= '/user' className={styles.NavWelcome}>WELCOME, {this.props.user.name.toLowerCase()}</Link>
                </div>
                <div className={styles.NavTools}>
                    <Link to ='/user' className={styles.NavLink}>profile</Link>
                    &nbsp; &nbsp;
                    <Link to ='/' className={styles.NavLink}>feed</Link>
                    &nbsp; &nbsp;
                    <Link to ='/about' className={styles.NavLink}>about</Link>
                    &nbsp; &nbsp;
                    {/* <Link to ='' className={styles.NavLink}>chat</Link>
                    &nbsp; &nbsp; */}
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle'} }}>
                    <span onClick={this.props.handleRemoveNotification} className={styles.NavNotfications} style={{
                        color: this.props.notification ? 'red' : 'black'
                    }}> <FaBell /></span>
                    </IconContext.Provider>
                </div>
            </div>
            :
            <div className={styles.NavBarVisitor}>
               <Link className={styles.NavLink} to='/login'>
               login
               </Link>
               &nbsp;
               <span>|</span>
               &nbsp;
               <Link className={styles.NavLink} to='/signup'>signup</Link>
           </div>
        )
    }
    
}

export default NavBar;