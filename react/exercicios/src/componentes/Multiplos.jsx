import React from "react";

// quando a função é exportada sem o default, é obrigatório o nome
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noie {props.nome}!</h1>

// também é spossível exportar como default os dois componentes ao mesmo tempo. Observe abaixo:
const Saudacao = { 
    BoaTarde,
    BoaNoite
}

export default Saudacao
