// import React, { Component } from 'react'

// export default class Greeting extends Component {
//     UserGreeting=()=>{
//         return <h1>Welcome User</h1>
//     }
//     GuestGreeting=()=>{
//         return <h1>Guest Welcome</h1>
//     }
//     state={
//         log:true
//     }
//     Greeting=(props)=>{
//         if(this.props.log==false){
//             return<this.UserGreeting/>
//         }else{
//             return<this.GuestGreeting/>
//         }
//     }

//     render() {
//         setTimeout(() => {
//             this.setState({log:false})
//         }, 5000);
//         return (
//             <div>
//                 <this.Greeting />
//             </div>
//         )
//     }
// }
