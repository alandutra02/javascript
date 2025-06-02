import React, {Component} from "react"; // vamos importar o React e também fazer um destructor em Component, para utilizar o componente somente referenciando Component

export default class Saudacao extends Component {
    constructor(props) {
        super(props) // chama o construtor da classe pai (Component) e permite o uso de this.props
        this.state = { // o objeto tem que ser "state". Se for outro nome, a alteração de conteúdo do não será possível, porque será apenas leitura
            tipo: this.props.tipo,
            nome: this.props.nome,
        }
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({tipo: e.target.value}) // setState() é uma função que é responsável por alterar o estado. Então, sempre que quiser alterar um estado use a função setState(). Como parâmetro de setState(), vamos colocar o objeto que desejamos alterar o estado.
    }
    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() { // o render só é usado porque é um componente de uma classe
        const { tipo, nome } = this.state // como o objeto é state, poderá ser alterado o conteúdo do objeto. Se fosse this.props, não poderia ser feita alteração porque é somente leitura. O this.state aqui está referenciando o objeto que foi criado e iniciado com "tipo: Fala" e "nome: Pedro". As variáveis tipo e fala tem que ser iniciadas com algum valor.
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                // abaixo está uma forma de chamar o evento sem a função arraw. Desta forma o contexto do this, que seria o do objeto, agora aponta para outro lugar. Então no contrutor, setTipo tem que ser definada com o bind.
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}