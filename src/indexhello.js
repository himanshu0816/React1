import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function App(props) {
    var a,b,operator; 
    const op=props.operator;
    if(op=="*"){ 
    const mul=props.a * props.b;
    return(
    <h1>Multiplicatio of {props.a} and {props.b} is:{mul}</h1>
    )
}
    else if(op=="+"){
    const sum=props.a + props.b;    
        return(      
        <h1>Addition of {props.a} and {props.b} is:{sum}</h1>    
        )  
    }
else if(op=="/"){
    const div=props.a/props.b;
    return (
        <h1>Division of {props.a} and {props.b} is :{div}</h1>
    )
}
else if(op=="-")
{
    const sub=props.a-props.b;
    return(
        <h1> subtraction of {porps.a} and {props} is "{sub}</h1>
    )
}
}

ReactDOM.render(  
<App a={value} b={value} operator="value"/>,
document.getElementById('root')
);
