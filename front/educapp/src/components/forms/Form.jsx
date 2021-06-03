// FIXME
import Img from '../../assets/img/avatar.jpg';

import React, {useContext, useState} from 'react'
import DataContext from '../../data/DataContext'

export default function Form(props) {
    const datas = useContext(DataContext)

    const [student, setStudent] = useState({...datas})

    return (
        <div className="user-account">
            <form className="user-form" >
                <div className="form-image">
                    <input type="image" src={Img} alt="Profile" className="image-picker" />
                </div>
                <div className="pointer"></div>

                <div className="form-group">
                    <label htmlFor="form-firstname">First Name</label>
                    <input type="text" value={student.nome} id="form-firstname" 
                        onChange={e => setStudent({...student, nome: e.target.value})}
                        className="user-input"/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-lastname">Last Name</label>
                    <input type="text" value={student.sobreNome} id="form-lastname"
                        onChange={e => setStudent({...student, sobreNome: e.target.value})}
                        className="user-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-id">Registration</label>
                    <input type="text" value={student.matricula} id="form-id"
                        readOnly
                        className="user-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-email">Email</label>
                    <input type="email" value={student.email} id="form-email" 
                        onChange={e => setStudent({...student, email: e.target.value})}
                        className="user-input" />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="form-birth">Birthday</label>
                    <input type="date"  id="form-birth" 
                        locate='en-us' format='yyyy-MM-dd' 
                        // onChange={null}
                        className="user-input" />
                </div> */}

                <div className="form-group">
                    <label htmlFor="form-pass">Password</label>
                    <input type="password" value={student.password} id="form-pass" 
                        onChange={e => setStudent({...student, password: e.target.value})}
                        className="user-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-confirm">Confirm</label>
                    <input type="password" id="form-confirm" value={student.newPassword}
                        onChange={e => setStudent({...student, newPassword: e.target.value})}
                        className="user-input" placeholder="Password" />
                </div>

                <div className="form-group">
                    <button className="form-btn" 
                        onClick={e => datas.putUser(e, student)}
                    >Update</button>

                    <button className="form-btn"
                        onClick={(e) => datas.deleteUser(e)}
                    >Delete</button>
                </div>
            </form>
        </div>
    );
}