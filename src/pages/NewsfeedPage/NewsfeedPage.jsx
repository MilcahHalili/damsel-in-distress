import React, { Component } from 'react';
import styles from './NewsfeedPage.module.css'
import Posts from '../../components/Posts/Posts'

class NewsfeedPage extends Component {
    state = {
        isUserPage:false
    }

    render(){
        return (
            <div className={styles.Newsfeed}>
                <Posts 
                    posts={this.props.posts}
                    handleUpdatePosts={this.props.handleUpdatePosts}
                    handleSubmit={this.props.handleSubmit}
                    user={this.props.user}
                    isUserPage={this.state.isUserPage}
                    triggerWords={this.props.triggerWords}
                />
            </div>
        )
    }
}

export default NewsfeedPage;