import '../assets/css/Account.css';

import Title from '../components/Title';
import Form from '../components/Form';

import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

export default function Account(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title="Account" color="#834070" 
                path="https://img.icons8.com/dusk/64/000000/check-book.png"/>
           <Form />
        </main>
    );
}