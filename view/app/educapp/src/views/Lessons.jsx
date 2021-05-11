import Title from '../components/Title';

import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

export default function Lessons(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Lessons" color="#893F58"  
                path="https://img.icons8.com/dusk/64/000000/pen.png" alt="Lessons" />
        </main>
    );
}