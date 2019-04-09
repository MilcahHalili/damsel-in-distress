import React from 'react';

const PostFeed = props => {
    return (
        <div>
            {props.posts.map((post, idx) => 
           <div className='Post-container' key={post._id}>
                <button className='Post-delete' name={post._id} onClick={props.handleDelete} />
                <div className='Post-categories'>
                {post.categories.map((word) =>
                    <span key={word} className='Post-category-button'>{word}</span>
                )}
                </div>
                <h4 className='Post-text'>{post.text}</h4>
                <div className='Comments-container'>
                    {post.comments.map((comment) =>
                        <div key={comment._id} className='Comments-text'>
                            <p>{comment.text}</p>
                        </div>
                    )}
                </div>
                <form id={post._id} className='Comment-form'  onSubmit={props.handleAddComment}>
                    <input onChange={props.handleChange}
                    name='comment'
                    value={props.comment === "" ? "" : props.local_comment}
                    className='Comment-input'
                    placeholder=' show your support'
                    autoComplete='off'
                    />
                </form>
            </div>
            )}
        </div>
    )
}

export default PostFeed;


