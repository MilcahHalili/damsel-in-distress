import React from 'react';

const PostFeed = props => {
    return (
        <div>
            {props.posts.map((post, idx) => 
           <div className='Post-container' key={idx}>
                    <button className='Post-delete' name={post._id} onClick={props.handleDelete} />
                    <h4 className='Post-text'>{post.text}</h4>
                        <div className='Comments-container'>
                        {post.comments.map((comment, idx) => 
                            <p key={idx}>{comment.text}</p>
                        )}
                        </div>
                    <form id={post._id} className='Comment-form'  onSubmit={props.handleAddComment}>
                        <input onChange={props.handleChange}
                            name='comment'
                            value={props.comment}
                            className='Comment-input'
                            placeholder=' show your support'
                        />
                    </form>
                </div>
            )}
        </div>
    )
}

export default PostFeed;


