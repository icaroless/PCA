// FIXME
import '../assets/css/LogOut.css';

import {Link} from 'react-router-dom'
import React, {useContext, useState} from 'react'

import DataContext from '../data/DataContext'


export default function LogOut(props) {
    const [userInput, setUser] = useState({id: "", password: ""})

    const {
        getUser,
        // setEmail,
        // setPassword,
    } = useContext(DataContext)


    
    return (
        <div className="modal">
            <div className="user-account login-box">

                <form className="user-form">
                    <h2 className="title-login">Educapp</h2>

                    <div className="form-group">
                        <label htmlFor="form-name">Email</label>
                        <input type="text" id="form-name" className="user-input"
                            value={userInput.id} 
                            onChange={e => setUser({...userInput, id: e.target.value})}
                                placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="form-password">Password</label>
                        <input type="password" id="form-password" className="user-input"
                            value={userInput.password}
                            onChange={e => setUser({...userInput, password: e.target.value})}
                                placeholder="Password"/>
                    </div>
                </form>

                <Link to="/">
                    <button className="login-btn"
                        onClick={() => getUser(userInput.id)}
                    >Login</button>
                </Link>

            </div>
        </div>
    );
}