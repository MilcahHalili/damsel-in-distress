import React, {Component} from 'react';
import postsService from '../../services/postsService'
import AddPost from '../AddPost/AddPost'
import PostFeed from '../PostFeed/PostFeed'

import './Posts.css'

class Posts extends Component {
    state = {
        text: '',
        comment: '',
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await postsService.create(this.state.text)
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts)
        this.setState({text: ''})
    }

    handleDelete = e => {
        postsService.deletePost(e.target.name)
    }

    handleAddComment = async (e) => {
        e.preventDefault();
        await postsService.addComment(e.target.id, this.state.comment)
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts)
        this.setState({comment: ''})
    }

    async componentDidMount() {
        const posts = await postsService.index()
        console.log(posts)
        this.props.handleUpdatePosts(posts);
    }

    render(){
        return (
            <div className='Posts'>
                <AddPost 
                    text={this.state.text}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <PostFeed
                    posts={this.props.posts}
                    comment={this.state.comment}
                    handleDelete={this.handleDelete}
                    handleChange={this.handleChange}
                    handleAddComment={this.handleAddComment}
                />
            </div>
        ) 
    }
}

export default Posts;