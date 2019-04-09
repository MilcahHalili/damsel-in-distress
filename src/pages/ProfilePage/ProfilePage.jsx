import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts'
import './ProfilePage.css'

class ProfilePage extends Component {
    state = {
        isUserPage:true
    }
    render () {
        return (
            <div className='Profile'>
                <Posts 
                    posts={this.props.posts}
                    handleUpdatePosts={this.props.handleUpdatePosts}
                    handleSubmit={this.props.handleSubmit}
                    user={this.props.user}
                    isUserPage={this.state.isUserPage}
                />
            </div>
        )
    }
 
}

export default ProfilePage;