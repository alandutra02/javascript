import React from "react";
import Filho from './Filho';

const Pai = props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props} /> {/*comentário: aqui o operador spread é a mesma coisa que se colocasse nome={props.nome} sobrenome={props.sobrenome}*/}
            <Filho {...props} nome="Carla" />
        </ul>
    </div>
export default Pai