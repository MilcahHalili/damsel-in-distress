import React, {Component} from 'react';
import postsService from '../../services/postsService'
import AddPost from '../AddPost/AddPost'
import PostFeed from '../PostFeed/PostFeed'
import socket from '../../socket'

import './Posts.css'

class Posts extends Component {
    state = {
        text: '',
        comment: '',
        tags: [],
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await postsService.create({text: this.state.text, tags: this.state.tags})
        await this.props.handleUpdatePosts()
        this.setState({text: '', tags: []})
    }

    handleDelete = async (e) => {
        await postsService.deletePost(e.target.name)
        this.props.handleUpdatePosts()
    }

    handleCommentDelete = async(e) => {
        await postsService.deleteComment(e.target.id, e.target.name)
        this.props.handleUpdatePosts()
    }

    handleAddComment = async (e) => {
        e.preventDefault();
        socket.getComment(e.target.id)
        await postsService.addComment(e.target.id, this.state.comment)
        await this.props.handleUpdatePosts()
        this.setState({comment: ''})
    }

    handleAddTag = e => {
        let clickedTag = e.target.name 
        let tagsCopy = this.state.tags
        if(tagsCopy.includes(clickedTag)){
            tagsCopy = tagsCopy.filter(tag => {
                return tag !== clickedTag
            })
        } else {
            tagsCopy.push(clickedTag)
        }
        console.log(tagsCopy)
        this.setState({tags: tagsCopy})
    }

    render(){
        return (
            <div className='Posts'>
                <AddPost 
                    text={this.state.text}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAddTag={this.handleAddTag}
                    tags={this.state.tags}
                    triggerWords={this.props.triggerWords}
                />
                <PostFeed
                    posts={this.props.posts}
                    comment={this.state.comment}
                    handleDelete={this.handleDelete}
                    handleChange={this.handleChange}
                    handleAddComment={this.handleAddComment}
                    handleCommentDelete={this.handleCommentDelete}
                    isUserPage={this.props.isUserPage}
                    user={this.props.user}
                />
            </div>
        ) 
    }
}

export default Posts;