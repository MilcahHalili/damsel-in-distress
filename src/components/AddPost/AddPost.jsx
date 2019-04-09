import React from 'react';

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
                <div className='Post-button-container'>
                    <input className='btn btn-default Post-button' type='submit' value='submit' />
                </div>
            </form>
        </div>
    )
}

export default AddPost;