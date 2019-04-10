import React from 'react'

const PostCategories = (props) => {
    
    return (
        <div className='Post-categories'>
        {props.triggerWords.map(word => 
            <button
            key={word}
            type="button"
            className='Post-category-button'
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

export default PostCategories;