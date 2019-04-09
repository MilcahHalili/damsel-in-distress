import React from 'react';
import styles from './NewsfeedPage.module.css'
import Posts from '../../components/Posts/Posts'

const NewsfeedPage = (props) => {
    return (
        <div className={styles.Newsfeed}>
            <Posts 
                posts={props.posts}
                handleUpdatePosts={props.handleUpdatePosts}
                handleSubmit={props.handleSubmit}
            />
        </div>
    )
}

export default NewsfeedPage;