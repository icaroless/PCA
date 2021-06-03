import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import DataContext from '../../data/DataContext'


export default function Tab(props) {
    const {id} = useContext(DataContext)

    const path = props.path === '/account'? `${props.path}/${id}` : props.path

    return (
        <Link to={path}>
            <div className="nav-link">
                <span className="nav-icon">
                    <FontAwesomeIcon icon={props.icon} className='fas'/>
                </span>
                <span className="nav-title">{props.title}</span>
            </div>
        </Link>
    )
}