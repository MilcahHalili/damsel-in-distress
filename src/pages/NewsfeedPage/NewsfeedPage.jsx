import React, { Component } from 'react';
import styles from './NewsfeedPage.module.css'
import Posts from '../../components/Posts/Posts'
import postsService from '../../services/postsService';
import userService from '../../services/userService'
import NewsfeedSideBar from '../../components/NewsfeedSideBar/NewfeedSideBar';

class NewsfeedPage extends Component {
    state = {
        posts: []
    }

    handleUpdatePosts = async () => {
        const posts = await this.checkforTriggerWords()
        this.setState({posts: posts})
    }

    checkforTriggerWords = async () => {
        const allPosts = await postsService.index()

        let isPostValid = (post, user) => {
            let valid = true;
            if(user._id === post.user){
                return valid;
            } else {
                for(let i = 0; i < post.tags.length; i++){
                    if(user.triggerwords.includes(post.tags[i] )){
                        valid = false;
                        break;
                    }
                }
            }
            return valid;
        }
  
        const posts = allPosts.filter(post => {
            return isPostValid(post, this.props.user) 
        })

        return posts
    }

    handleSearch = async (e) => {
        const posts = this.state.posts.filter(post => {
           return post.tags.includes(e.target.name)
        })
        this.setState({posts:posts})
    }

    async componentDidMount() {
        const user = await userService.getFullUser()
        this.props.handleUpdateUser(user)
        const posts = await this.checkforTriggerWords()
        this.setState({posts: posts})
    }

    render(){
        return (
            <div className={styles.Newsfeed}>
                <NewsfeedSideBar
                    triggerWords={this.props.triggerWords}
                    handleSearch={this.handleSearch}
                    handleUpdatePosts={this.handleUpdatePosts}
                />
                <Posts 
                    posts={this.state.posts}
                    user={this.props.user}
                    // isUserPage={this.state.isUserPage}
                    triggerWords={this.props.triggerWords}
                    handleUpdatePosts={this.handleUpdatePosts}
                    handleSubmit={this.props.handleSubmit}
                />
            </div>
        )
    }
}

export default NewsfeedPage;