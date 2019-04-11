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
        </div>
    )

}

export default Search;