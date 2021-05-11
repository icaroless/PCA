import '../assets/css/Course.css';

import Title from '../components/Title';
// import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'


export default function Course(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Course" color='#6C4360' 
                path="https://img.icons8.com/dusk/64/000000/classroom.png" alt="Course"/>
  
        </main>
    );
}