import React from "react";

const Search = (props) => (
    <div>
                <form onSubmit={props.searchList}>
                    <label >Search Task:&nbsp;</label>
            <input type="text" name="searchTitle" />
            <input type="submit" value="Search" />
            <button onClick={props.resetList}>Reset</button>
        </form>
            </div>
  )

export default Search;