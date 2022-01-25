import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Calculator(props){

var result = props.a+props.b;
return(
    <h1>the addition of {props.a} and {props.b} is {result}</h1>
);
}

ReactDOM.render(<Calculator a={45} b={35}/>,document.getElementById('root'));
