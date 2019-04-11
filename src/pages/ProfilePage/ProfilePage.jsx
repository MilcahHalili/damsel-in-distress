import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts'
import userService from '../../services/userService'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import './ProfilePage.css'

class ProfilePage extends Component {
    state = {
        isUserPage:true
    }

    async componentDidMount() {
        const user = await userService.getUserFull()
        this.props.handleUpdateUser(user)
        console.log(this.props.user)
    }

    render () {
        return (
            <div className='Profile'>
                <ProfileInfo 
                    user={this.props.user}
                />
                <Posts 
                    posts={this.props.posts}
                    user={this.props.user}
                    isUserPage={this.state.isUserPage}
                    triggerWords={this.props.triggerWords}
                    handleUpdatePosts={this.props.handleUpdatePosts}
                    handleSubmit={this.props.handleSubmit}
                />
            </div>
        )
    }
 
}

export default ProfilePage;