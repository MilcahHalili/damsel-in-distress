import React from 'react'
import Resources from '../Resources/Resources'
import Search from '../Search/Search'

import './NewsfeedSideBar.css'

const NewsfeedSideBar = props => {
    return (
       <div className='Newsfeed-SideBar'>
        <Search 
            triggerWords={props.triggerWords}
            handleSearch={props.handleSearch}
        />
        <Resources />
       </div>
    )
}

export default NewsfeedSideBar