import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; vamos retirar o componente App e adiconar o componente Calculator
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
