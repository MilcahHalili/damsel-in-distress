import React from 'react'

const Search = (props) => {
    return (
        <div className='Search'>
            <h3>search by topic</h3>
            <div className='Search-trigger-container'>
            {props.triggerWords.map(word => 
                <button
                    name={word}
                    key={word}
                    className="Search-triggerwords"
                    onClick={props.handleSearch}
                >
                {word}
                </button>
            )}
            </div>
            <button 
                className='Search-restart'
                onClick={props.handleUpdatePosts}
            >
            refresh
            </button>
        </div>
    )

}

export default Search;