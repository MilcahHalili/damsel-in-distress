import React from 'react'

const PostModal = (props) => {
    return (
    <div style={{
        display: props.showNotifcation ? 'block' : 'none'
    }}>
       {props.notification ? 
            <h1>POST</h1>
        : 
            <h3>no new notifications</h3>
       }
    </div>
    )
} 

export default PostModal;