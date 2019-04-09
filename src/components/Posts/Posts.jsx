import React, {Component} from 'react';
import postsService from '../../services/postsService'
import './Posts.css'

class Posts extends Component {
    state = {
        text: '',
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        postsService.create(this.state.text)
        this.setState({text: ''})
    }

    async componentDidMount() {
        const posts = await postsService.index()
        this.props.handleUpdatePosts(posts);
    }

    render(){
        return (
            <div className='Posts'>
                <form className='Post-form' onSubmit={this.handleSubmit}>
                    <h3 className='Post-header'>&nbsp; add new post</h3>
                    <input 
                        className='Post-input' 
                        type='text' 
                        name='text' 
                        value={this.state.text}
                        autoComplete='off'
                        onChange={this.handleChange}
                        placeholder=' you are stronger than you think'
                        />
                    <div className='Post-button-container'>
                    <input className='btn btn-default Post-button' type='submit' value='submit' />
                    </div>
                </form>
                {this.props.posts.map((post, idx) => 
                <div className='Post-container' key={idx}>
                    <h4 className='Post-text'>{post.text}</h4>
                    <form className='Comment-form'>
                        <input 
                            className='Comment-input'
                            placeholder=' show your support'
                        />
                    </form>
                </div>
                )}
            </div>
        ) 
    }
}

export default Posts;