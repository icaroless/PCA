import Title from '../components/Title';

import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

export default function Course(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)


    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Log Out" color="#AA0F30" 
                path="https://img.icons8.com/dusk/64/000000/logout-rounded.png" alt="Logout" />
        </main>
    );
}