import React from 'react';
import Search from '../components/Search';
import Picture from '../assets/img/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';


export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <div className="logo">
                <FontAwesomeIcon icon={faBookReader} className="educapp-icon"/>
                Educapp
            </div>
            <Search />
            <div className="profile-opt">
                <img src={Picture} alt="Profile" className="avatar" />
            </div>
        </div>
    );
}