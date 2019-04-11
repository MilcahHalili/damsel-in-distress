import React from 'react'

const ProfileInfo = (props) => {
    return (
        <div className='Profile-info'>
            <div className='Profile-name-bio'>
                <h1>{props.user.name}</h1>
                <h5>about me</h5>
                <p>{props.user.bio}</p>
                <h5>my trigger words</h5>
            </div>
            <div className='Profile-triggerwords-container'>
                {props.user.triggerwords.map(word => 
                    <button
                        key={word}
                        name={word}
                        className='Profile-triggerwords'
                        onClick={props.handleRemoveTrigger}
                    >
                    {word}
                    </button>
                )}
                <h5>update trigger words</h5>
                <div className='Profile-triggerwords-container'>
                {props.triggerWords.map(word =>
                    <button
                        key={word}
                        name={word}
                        className='Profile-triggerword-button'
                        onClick={props.handleAddTrigger}
                    >
                    {word}
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;