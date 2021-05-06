import Img from '../assets/img/avatar.png';

import React, {useState} from 'react'

export default function Form(props) {
    const [name, setName] = useState('Fernanda')
    const [username, setUsername] = useState('nanda')
    const [email, setEmail] = useState('teste@email.com')
    const [birth, setBirth] = useState('1990-10-31')
    const [password, setPassword] = useState('admin')

    return (
        <div className="user-account">
            <form className="user-form">
                <input type="image" src={Img} alt="" className="image-picker" />

                <div className="form-group">
                    <label htmlFor="form-name">Full Name</label>
                    <input type="text" value={name} id="form-name" onChange={(ev) => setName(ev.target.value)}
                        className="user-input"/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-name">Username</label>
                    <input type="text" value={username} id="form-username" 
                        className="user-input" onChange={(ev) => setUsername(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-email">Email</label>
                    <input type="email" value={email} id="form-email" 
                        className="user-input" onChange={(ev) => setEmail(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-birth">Birthday</label>
                    <input type="date" value={birth} id="form-birth" 
                        className="user-input" onChange={(ev) => setBirth(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-pass">Password</label>
                    <input type="password" value={password} id="form-pass" 
                        className="user-input" onChange={(ev) => setPassword(ev.target.value)}/>
                </div>

                <button type="submit" className="form-btn">Update</button>
            </form>
        </div>
    );
}