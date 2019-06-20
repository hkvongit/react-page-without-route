import React, { Component } from 'react'

export default class Layout extends Component {
    state={
        boo:true,
        name:"hari"
    }    
    onPress = () => {
        this.setState({
          boo:  false,
          name: 'THE NEW TEXT GOES HERE'
        })}


    render() {
        // function changeName(){
        //     this.setState({name:"ccc"})
        // }
        // setTimeout(() => {
        //     this.setState({name:"changed"})
        // }, 10000);
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button title="ChangeText" onClick={this.onPress}>Click</button>
            </div>
        )
    }
}