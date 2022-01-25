import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function calc(props){
//     var marks=(props.science+props.math+props.english)/3;
//     if(marks>80 && marks<90){
//     return(
//         <h1>student grade is A</h1>
//     )
//     }
//     else if(marks>70 && marks<80){
//         return(
//             <h1>Grade is B</h1>
//         )
//     }
//     else if(mark>60 && marks<70){
//         return(
//             <h1>Grade is C</h1>
//         )
//     }else{
//         return(
//             <h1>Fail</h1>
//         )
//     }
// }
// // class App1 extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={a:50,b:40};
// //     }
// //     render(){
// //         return(
// //             <h1>Sum of number{this.state.a} and{this.state.b} is:{this.state.sum}</h1>
// //         );
// //     }
// // }
// ReactDOM.render(  
//     <calc/ science={value} math={value} english={value}>,
// document.getElementById('root')
// );
class Cal extends React.Component{
    constructor(props){
        super(props)
        this.state={english:50,math:40,science:35,socialscience:40};
    }

    render() {
        let marks=(this.state.english+this.state.math+this.state.sience+this,this.state.scocialscience);
        if(marks=>90 && marks<100)
        return (
            <h1>student Grade is A</h1>
        )
    }
    else if(makrs=>80 && marks<90){
    return(
        <h1>student Grade is B</h1>
        )
    }

}