import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    return (
        <div className='Profile-info'>
            <div className='Profile-name-bio'>
                <h1>{props.user.name}</h1>
                <h5>{props.user.bio}</h5>
            </div>
            <div className='Profile-triggerwords-container'>
                {props.user.triggerwords.map(word => 
                    <span
                        key={word}
                        className='Profile-triggerwords'
                    >
                        {word}
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProfileInfo;