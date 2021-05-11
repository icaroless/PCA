import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

import Title from '../components/Title';
import Panel from '../components/Panel';

export default function Course(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Settings" color="#AE1E62"
                path="https://img.icons8.com/dusk/64/000000/settings.png" alt="Student" />
            <Panel />
        </main>
    );
}