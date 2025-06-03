import React from "react";
import Filho from './Filho';

const Pai = props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
            React.cloneElement(props.children, { ...props, ...props.children.props })
            } {/* estamos adicionando propriedades aos elementos filhos. Serão usadas proprieades do elemento pai e aquelas proprieades onde estiver presente no elemento pai e elemento filho, o elemento filho vai sobrescrever*/}
            
        </ul>
    </div>
export default Pai