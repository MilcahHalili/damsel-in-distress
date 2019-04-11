import React, {Component} from 'react';
import postsService from '../../services/postsService'
import AddPost from '../AddPost/AddPost'
import PostFeed from '../PostFeed/PostFeed'

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
        this.checkforUserPage()
        this.setState({text: '', tags: []})
    }

    checkforUserPage = async () => {
        if (this.props.isUserPage === true) {
            console.log('user')
            let posts = await postsService.userIndex()
            this.props.handleUpdatePosts(posts)
            console.log(posts)
        } else {
            console.log('feed')
            const posts = await postsService.index()
            this.props.handleUpdatePosts(posts);
        }
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

    handleAddTag = e => {
        let tag = e.target.name 
        let tagsCopy = this.state.tags
        tagsCopy.push(tag)
        this.setState({tags: tagsCopy})
    }

   componentDidMount() {
        this.checkforUserPage()
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
                    isUserPage={this.props.isUserPage}
                    user={this.props.user}
                />
            </div>
        ) 
    }
}

export default Posts;