import React from 'react';
import ReactDOM from 'react-dom/client'; // note o '/client'
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

// abaixo, é feita a renderização do conteúdo do componente que foi definido no arquivo "componentes/primeiro"
ReactDOM.createRoot(document.getElementById('root')).render(
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
        </Pai>
    );