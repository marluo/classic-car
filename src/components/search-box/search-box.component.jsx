import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ searchfield, searchChange }) => (
    <div className='sb-container'>
        <input 
            className='sb-content'
            type='search'
            placeholder='select cars' 
            onChange={searchChange}
        />
    </div>
);

export default SearchBox;