import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

export default function Search(props) {
    return (         
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input placeholder="Search"/>
        </div>
        
    );
}