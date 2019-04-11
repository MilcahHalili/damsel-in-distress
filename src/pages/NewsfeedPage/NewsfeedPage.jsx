import React, { Component } from 'react';
import userService from '../../services/userService'
import styles from './NewsfeedPage.module.css'
import Posts from '../../components/Posts/Posts'

class NewsfeedPage extends Component {
    state = {
        isUserPage:false
    }

    checkforTriggerWords = async () => {
        console.log(this.props.user)
        
        const userPosts = this.props.posts.filter(post => {
            let post_id = post._id.toString()
            for(let i=0; i < this.props.user.posts.length; i++){
                if(this.props.user.posts[i]._id === post_id){
                    return post
                }
            }
        })
    
        console.log(userPosts)

        const nonUserPosts = this.props.posts.filter(post => {
            let post_id = post._id.toString()
            let userPostIds = []
            for(let i=0; i < this.props.user.posts.length; i++){
                userPostIds.push(this.props.user.posts[i]._id)
                }
            return !userPostIds.includes(post_id)
        })
        console.log(nonUserPosts)

        let isPostValid = (post, user) => {
            let valid = true;
            for(let i = 0; i < post.tags.length; i++){
            if(user.triggerwords.includes(post.tags[i] )){
                valid = false;
                break;
            }
         }
        return valid;
        }
  
        const validPosts = nonUserPosts.filter(post => {
            return isPostValid(post, this.props.user) 
        })

        console.log(validPosts)

        const posts = userPosts.concat(validPosts)
        console.log(posts.length)
        await this.props.handleUpdatePosts(posts)
    }

    async componentDidMount() {
        const user = await userService.getUserFull()
        this.props.handleUpdateUser(user)
        this.checkforTriggerWords()
    }

    render(){
        return (
            <div className={styles.Newsfeed}>
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

export default NewsfeedPage;