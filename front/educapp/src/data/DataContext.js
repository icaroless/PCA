import React from "react";

export const userData = {
    nome: "",
    sobreNome: "",
    matricula: "",
    dataNascimento: "",
    email: "",
    password: "",
    id: ""
}

const DataContext = React.createContext(userData);

export default DataContext;
