import React, {Component} from "react";
import './Calculator.css'
import {evaluate} from 'mathjs'

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState } /* aqui foi criado um clone de inicialState a atribuído a variável state. Esta variável já existe no Component do React. A variável state pode ser modificada ao contrário de props que não pode*/

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)

        this.addDigit = this.addDigit.bind(this)  
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
       if(this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
       } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.value[0]
            }
            values[1] = 0
            
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
       }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')) { // o includes é um método de string (também funciona em arrays), que verifica se um determinado valor existe dentro da string.
            return // aqui se for digitado o segundo ponto na caluladora, ele sai da função sem fazer nada   
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue // se clearDisplay form verdadeiro, zera o currentValue que é o valor corrente.
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n != '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] // clonagem do array state.values para values já convertido em float para permitir operações matemáticas
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }

    render() {     
        return ( 
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}