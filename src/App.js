import React, {Component} from 'react';
import Button from './components/Button';
import Screen from './components/Screen';
import './css/App.css';

class App extends Component {
  state = {
    buttons: ["0","1","2","3","4","5","6","7","8","9","+","-","x","÷","=","CLEAR"],
    input: ""
  }

  button =(event)=> {
    if (event.target.id === "CLEAR") {
      this.setState({input:""})
    }else if (event.target.id === "=") {
      let temp = this.state.input
      temp = temp.split("")
      let i
      for (i = 0; i < temp.length; i++ ) {
        if (temp[i] === "x") {
          temp[i] = "*"
        }
      }
      for (i = 0; i < temp.length; i++ ) {
        if (temp[i] === "÷") {
          temp[i] = "/"
        }
      }
      temp.join("")
      console.log(temp)
      let answer = eval(this.state.input)
      console.log(temp)
      this.setState({input:answer})
    }else if (this.state.input !== "") {
      let temp = this.state.input.concat(event.target.id)
      this.setState({input:temp})
    }else{
      let temp
      temp = event.target.id
      this.setState({input:temp})
    }
  }

  render() {
    return(
      <div className = "app">
        <Screen input = {this.state.input}/>
        {this.state.buttons.map((info,index)=> {
          return (
            <div key = {index}>
              <Button info = {info} click = {this.button}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;