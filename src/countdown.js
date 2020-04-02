import React, {Component} from "react";



export default class CountDown extends React.Component{

    printNumbers =(from, to)=> {
        let current = from;
        let timerId = setInterval(function() {
            alert(current);
            if (current == to) {
                clearInterval(timerId);
            }
            current++;
        }, 1000);
    }
    render() {
        const number = this.printNumbers(1,180)
        return (
            <div>
                number
            </div>
        )
    }
}
import React, {Component} from "react";



export default class Counter extends React.Component{
    state = {
        count: 0
    }

    handleButtonCounterClick =()=>{
        this.setState({count: this.state.count + 1})
    }
    render() {
        const handleClick = this.handleButtonCounterClick
        const test =()=>'ahoj'+'hoj'
        return (
            <div className="counter">
                <button onClick={handleClick}>
                    Click
                </button>
                {this.state.count}
                {test()}
            </div>
        )
    }
}