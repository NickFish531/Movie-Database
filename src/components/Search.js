import React from 'react'

function Search ({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" placeholder='Seach for a movie...' 
                className="searchbox" 
                onChange={handleInput} 
                onKeyDown={search}
            />
        </section>
    )
}

export default Search