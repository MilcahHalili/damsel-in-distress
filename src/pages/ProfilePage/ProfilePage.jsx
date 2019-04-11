import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts'
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar'
import './ProfilePage.css'
import postsService from '../../services/postsService';

class ProfilePage extends Component {
    state = {
        posts: [],
    }

    handleUpdatePosts = async () => {
        const posts = await postsService.userIndex()
        this.setState({posts: posts})
    }

    async componentDidMount() {
        const posts = await postsService.userIndex()
        console.log(posts)
        this.setState({posts: posts})
        // this.props.handleUpdateUser(user)
        // console.log(this.props.user)
    }

    render () {
        return (
            <div className='Profile'>
                <ProfileSideBar
                    user={this.props.user}
                    triggerWords={this.state.userTriggers}
                />
                <Posts 
                    posts={this.state.posts}
                    user={this.props.user}
                    triggerWords={this.props.triggerWords}
                    handleUpdatePosts={this.handleUpdatePosts}
                    handleSubmit={this.props.handleSubmit}
                />
            </div>
        )
    }
 
}

export default ProfilePage;