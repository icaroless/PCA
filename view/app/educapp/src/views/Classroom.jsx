import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

import Title from '../components/Title';

export default function Classroom(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
         <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Classroom" color='#6C4360' 
                path="https://img.icons8.com/dusk/64/000000/classroom.png" alt="Course"/>
   
        </main>
    );
}