import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

export default function CountDown (props){
    const{val, time} = props
    let [number, setNumber] = useState(0)
    useEffect(()=> {
        const startTime = Date.now()
        const myNumber=setInterval(() => {
            let actTime = Date.now()
            let actNumber = Math.round((actTime - startTime)*(val/time))
            if (actNumber > val) {
                setNumber(val)
                clearInterval(myNumber)
            }
            else {
                setNumber(actNumber)
            }
            console.log(number)
        }, 40)
        return ()=> {clearInterval(myNumber)}
    },[time, val]);

    return(
        <div> Toto je : {(number)} </div>
    )
}
CountDown.defaultProps = {
    val: 100,
    time: 1000
};
CountDown.propTypes = {
    val: PropTypes.number,
    time: PropTypes.number
};


//  export default class CountDown extends React.Component{
//      state = {
//          number: 0
//      }
//
//
//      componentDidMount() {
//          const val = this.props.val;
//          const time = this.props.time;
//          const suma = Math.round((val)/(25*(time/1000)))
//         this.myNumber=setInterval(() => {
//              const {number} = this.state
//              this.setState({number:this.state.number + suma})
//              if (number > val){
//                  clearInterval(this.myNumber)
//                 this.setState({number:val})
//              }
//          },40)
//     }
//      componentWillUnmount() {
//          clearInterval(this.myNumber)
//      }
//      render() {
//          const {number} = this.state
//         return (
//              <div> Toto je : {(this.state.number)}
//              </div>
//          )
//      }
//  }
//CountDown.defaultProps = {
//     val: 100,
//     time: 1000
// };
//
//for (let i = 0; i < (users.length < 15 ? users.length : 15); i++){
//         const user = users[i]
//         const {firstName, lastName, id} = user
//         renderedUsers.push(<div key={id}>{firstName} {lastName}</div>)
























