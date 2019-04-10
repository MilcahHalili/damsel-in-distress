import React from 'react'

const PostTags = (props) => {
    return (
        <div className='Post-tags'>
        {props.triggerWords.map(word => 
            <button
            key={word}
            type="button"
            className='Post-tag-button'
            style={{
                backgroundColor: props.tags.includes(word) ? 'gray' : '#b8c8df'
            }}
            name={word}
            onClick={props.handleAddTag}
            >
        {word}
        </button>
        )}
    </div>
    )
}

export default PostTags;