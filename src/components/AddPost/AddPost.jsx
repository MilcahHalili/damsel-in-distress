import React from 'react';
import PostTags from '../PostTags/PostTags'

const AddPost = props => {
    return (
        <div>
            <form className='Post-form' onSubmit={props.handleSubmit}>
                <h3 className='Post-header'>&nbsp; add new post</h3>
                <input 
                    className='Post-input' 
                    type='text' 
                    name='text' 
                    value={props.text}
                    autoComplete='off'
                    onChange={props.handleChange}
                    placeholder=' you are stronger than you think'
                />
                <PostTags
                    handleAddTag={props.handleAddTag} 
                    tags={props.tags}
                    triggerWords={props.triggerWords}
                />
                <div className='Post-button-container'>
                    <input className='btn btn-default Post-button' type='submit' value='submit' />
                </div>
            </form>
        </div>
    )
}

export default AddPost;