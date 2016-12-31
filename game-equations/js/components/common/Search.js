import React, {PropTypes}  from 'react';
import {hashHistory} from 'react-router';
import toastr from 'toastr';


const Search = ({searchText, onSearchChange}) => {

    function makeSearch(event) {
        event.preventDefault();
        var search = searchText.trim();
        if(search.length > 2 && search!='') {
            hashHistory.push('/search/'+search);
        }
        else {
            toastr.error('You need at least 2 characters.');
        }
    }

    return(
        <form className="search_form">
            <input value={searchText} onChange={onSearchChange} placeholder="Search" />
            <button onClick={makeSearch}></button>
        </form>
    );
};

Search.propTypes = {

};

export default Search;
