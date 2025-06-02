import React from "react";

// para inserir propriedades, usamos a variável "props" (é convensão, poude usar outro nome, mas recomenda-se o uso da nomenclarura padrão) e para chamar a propriedade que foi definida como "nome"
// export default props => <h1>Bom dia {props.nome}! Tenho {props.idade} anos.</h1>

/* export default (props) => <h1>Bom dia {props.nome}!</h1> também pode ter o parenteses porque é um parâmetro da função default*/

// por padrão, o export só aceita uma tag de cada vez. Para usar mais de uma tag (exemplo, usamos acima o exemplo com apenas a tag <h1>, agora vamos usar duas tags <h1> e <h2>) usamos o react fragement que é o <></>

// abaixo foi usado uma função arrow não anônima, porque o pugin do visual studio chamdo ESLint fica emitindo warnings
const BomDia = props => 
<>
<h1>Bom dia {props.nome}! Tenho {props.idade} anos.</h1>
<h2>Até breve {props.saudacao}!</h2>
</>
export default BomDia