import React from 'react'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import Resources from '../Resources/Resources'

import './ProfileSideBar.css'

const ProfileSideBar = props => {
    return (
       <div className='Profile-SideBar'>
           <ProfileInfo 
            user={props.user}
            triggerWords={props.triggerWords}
            />
           <Resources />
       </div>
    )
}

export default ProfileSideBar