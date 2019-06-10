import React from 'react';

const SearchImportance = (props) => { 

    return (<div>
        <form onSubmit={props.SearchByImportance}>
            <input type="range" name="searchImportance" step="20" min="0" max="100" />
            <input type="submit" value="Search" />
        </form>
    </div>);
}

export default SearchImportance;