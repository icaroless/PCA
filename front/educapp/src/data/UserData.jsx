// FIXME
import React, {useState} from 'react';
import DataContext from './DataContext'
import axios from 'axios'

const baseUrl = "http://localhost:8080/api/aluno"

const Storage = (props) => {
    const [user, setState] = useState(DataContext)

    function updateState(key, value) {
        setState({
            ...user, 
            [key]: value}
        )
    }

    function getUser(id) {
        axios.get(`${baseUrl}/${id}`)
            .then(resp => {
                const student = resp.data;
                setState({...student});
            })
    }

    async function deleteUser(e) {
        e.preventDefault()
        await axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                setState({
                    nome: "",
                    sobreNome: "",
                    matricula: "",
                    dataNascimento: "",
                    email: "",
                    password: "",
                    id:""
                })

                window.location.replace("http://localhost:3000/login")
        })
    }

    async function putUser(e, datas) {
        e.preventDefault()
        const {id} = user

        const newDatas = {...datas}

        await axios.put(`${baseUrl}/${user.id}`, newDatas)
            .then(resp => {
                getUser(id)
                alert("Dados atualizados com sucesso!")
            }
        )

    }

    return (
        <DataContext.Provider value = {{
            nome: user.nome,
            sobreNome: user.sobreNome,
            matricula: user.matricula,
            email: user.email,
            dataNascimento: user.dataNascimento,
            password: user.password,
            id: user.id,
            setName: e => updateState('nome', e),
            setSurname: e => updateState('sobreNome', e),
            setBirthday: e => updateState('dataNascimento', e),
            setEmail: e => updateState('email', e),
            setPassword: e => updateState('password', e),
            getUser: e => getUser(e),
            deleteUser: e => deleteUser(e),
            putUser: (i, d) => putUser(i, d)
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default Storage