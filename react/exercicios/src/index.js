import React from 'react';
import ReactDOM from 'react-dom/client'; // note o '/client'
import Pai from './componentes/Pai';


// abaixo esta a forma de importar sem o destructor criando um nome para o componente personalizado e usando como no exemplo <Saudacao.BoaTarde nome="Juca"/>
//import Saudacao from './componentes/Multiplos'


// abaixo, é feita a renderização do conteúdo do componente que foi definido no arquivo "componentes/primeiro"
ReactDOM.createRoot(document.getElementById('root')).render(
    // <> </> é chamado de React Fragment, e serve para agrupar elementos sem adicionar tags extras no DOM.
    // <div> <div/> pode ser utilizado no lugar de React Fragment, e serve para agrupar elementos só que adicionando tags extras no DOM que serão as div.
    <>
        <div>
            <Pai nome="Paulo" sobrenome="Silva" />
        </div>
    </>
    );
    
