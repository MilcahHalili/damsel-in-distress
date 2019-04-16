import React from 'react';
import {FaHandsHelping} from 'react-icons/fa'
import { IconContext } from 'react-icons'


const PostFeed = props => {
    return (
        <div>
            {props.posts.map((post, idx) => 
           <div 
            className='Post-container' 
            key={post._id}>
            <div className='Post-toolbar'>
                <div className='Post-tags'>
                {post.tags.map((word) =>
                    <span key={word} className='Post-tag-button'>{word}</span>
                )}
                </div>
                <div>
                {props.user._id === post.user ?
                <button className='Post-delete' name={post._id} onClick={props.handleDelete}>X</button>
                :
                <div></div>
                }
                </div>
            </div>
            <div className='Post-text'>
                <p style={{
                    fontSize: '14px',
                    padding: '0px',
                    margin: '0px'
                }}>{post.text}</p>
            </div>
            <div className='all-comments-container'>
                {post.comments.map((comment) =>
                    <div key={comment._id} className='Comment-container'>
                        <div className='Comment-icon'>
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize:'25px' } }}>
                                <FaHandsHelping />
                            </IconContext.Provider>
                        </div>
                        <div className='Comment-text'>
                            <p style={{
                                padding: '2px',
                                margin: '2px'
                            }}>{comment.text}</p>
                        </div>
                        {props.user._id === post.user || props.user._id === comment.user ?
                        <button className='Post-delete' id={post._id} name={comment._id} onClick={props.handleCommentDelete}>X</button>
                        :
                        <div></div>
                        }
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


