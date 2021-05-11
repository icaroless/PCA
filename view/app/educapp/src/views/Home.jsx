import Title from '../components/Title';

import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

export default function Home(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)


    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Home" color="#46335E"
                path="https://img.icons8.com/dusk/64/000000/work-from-home.png" alt="Home" />
        </main>
    );
}