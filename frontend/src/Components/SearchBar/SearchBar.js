import React, { useState } from 'react'
import './SearchBar.css'
import { searchRestaurantsByLocation } from './SearchFunctions'

/** takes searchType as a prop in case we need SearBar to be reusable */
function SearchBar(props) {

    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            
            handleSearch(event.target.value)
        }
    }

    const handleSearch = (searchTerm) => {
        
        
        switch(props.searchType) {
            case 'RESTAURANTS_LOCATION':
                props.addRestaurants(searchRestaurantsByLocation(searchTerm))
                break

            default: console.log(searchTerm)    
        }
    }


    return (
        <div className="search">
            <div className="search--input">
                <input type="text" 
                placeholder="Search..." 
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
                {/* <div className="search--icon" onClick={handleSearch}>🔍</div> */}
            </div>
        </div>
    )
}

export default SearchBar
