import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
    return(
        <div>
            <input className='pa3 ba br3 --washed-blu b--green bg-lightest-blue'
            type="search" placeholder="search robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;