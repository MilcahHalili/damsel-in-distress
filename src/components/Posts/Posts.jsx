import React, {Component} from 'react';
import postsService from '../../services/postsService'
import AddPost from '../AddPost/AddPost'
import PostFeed from '../PostFeed/PostFeed'

import './Posts.css'

class Posts extends Component {
    state = {
        text: '',
        comment: '',
        categories: [],
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await postsService.create({text: this.state.text, categories: this.state.categories})
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts)
        this.setState({text: '', categories: []})
    }

    handleDelete = async (e) => {
        await postsService.deletePost(e.target.name)
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts)
    }

    handleAddComment = async (e) => {
        e.preventDefault();
        await postsService.addComment(e.target.id, this.state.comment)
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts)
        this.setState({comment: ''})
    }

    handleAddCategory = e => {
        let category = e.target.name 
        let categoriesCopy = this.state.categories
        categoriesCopy.push(category)
        this.setState({categories: categoriesCopy})
        console.log(this.state.categories)
    }

    async componentDidMount() {
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts);
    }

    render(){
        return (
            <div className='Posts'>
                <AddPost 
                    text={this.state.text}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAddCategory={this.handleAddCategory}
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