import React from "react" // Nessário para o uso de transpile usando o JSX

export default function Primeiro() {
    /* o return será exibido no browser. Poderá ser retornada uma string: 
    return "Teste" */
    // também pode ser retornado um JSX como no exemplo abaixo. Neste caso, será necessário importar o React para que possa ser feito o transpile. O JSX é mais rigoroso que o HTML, pois tem que abrir e fechar todo o corpo das tags :
    return <h1>Primeiro</h1>
}

/* também podemos usar a função arrow:
    export default () => <h1>Primeiro</h1> */