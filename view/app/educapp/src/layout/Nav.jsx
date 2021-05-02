import React from 'react';
import Tab from '../components/Tab';

import { faComment, faHome, faPen, faUserAlt, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props) {
    return (
        <React.Fragment>
            <div className="menu">
                <div className="menu-tabs">
                    <Tab tab='/course' fa={faHome} text="Course" />
                    <Tab tab='/hours' fa={faComment} text="Hours" />
                    <Tab tab='/lessons' fa={faPen} text="Lessons" />
                    <Tab tab='/account' fa={faUserAlt} text="Account" />
                    <Tab tab='/settings' fa={faCogs} text="Settings" />
                </div>
                    <Tab tab='/logout' fa={faSignOutAlt} text="Log Out" />
            </div>
        </React.Fragment>
    );
}