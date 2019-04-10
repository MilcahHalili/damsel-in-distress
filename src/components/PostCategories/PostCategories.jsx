import React from 'react'

const PostCategories = (props) => {
    return (
        <div className='Post-categories'>
        <button
            type="button"
            className='Post-category-button' 
            name='depression'
            onClick={props.handleAddCategory}
        >
        depression
        </button>
        <button 
            type="button"
            className='Post-category-button' 
            name='anxiety'
            onClick={props.handleAddCategory}
        >
        anxiety
        </button>
        <button 
            type="button"
            className='Post-category-button' 
            name='sexual violence'
            onClick={props.handleAddCategory}
        >
        sexual violence
        </button>
        <button
            type="button" 
            className='Post-category-button'
            name='rape'
            onClick={props.handleAddCategory}
        >
        rape
        </button>
        <button 
            type="button"
            className='Post-category-button' 
            name='sexual harassment'
            onClick={props.handleAddCategory}
        >
        sexual harassment
        </button>
        <button
            type="button" 
            className='Post-category-button'
            name='domestic violence'
            onClick={props.handleAddCategory}
        >
        domestic violence
        </button>
        <button 
            type="button"
            className='Post-category-button'
            name='self-harm'
            onClick={props.handleAddCategory}
        >
        self-harm
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='suicide'
             onClick={props.handleAddCategory}
        >
        suicide
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='relationships'
             onClick={props.handleAddCategory}
        >
        relationships
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='breakups'
             onClick={props.handleAddCategory}
        >
        breakups
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='work'
             onClick={props.handleAddCategory}
        >
       work
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='loss'
             onClick={props.handleAddCategory}
        >
        loss
        </button>
        <button 
             type="button"
             className='Post-category-button'
             name='loneliness'
             onClick={props.handleAddCategory}
        >
        loneliness
        </button>
        <button 
            type="button"
            className='Post-category-button' 
            name='stress'
            onClick={props.handleAddCategory}
        >
        stress
        </button>
    </div>
    )
}

export default PostCategories;