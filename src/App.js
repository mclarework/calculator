import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    result: ""
  }



  render() {
    return(
      <div className = "app">
        <Button id = "zero" number = "0" click={()=> this.input(0)}/>
        <Button id = "one" number = "1" click={()=> this.input(1)}/>
        <Button id = "two" number = "2" click={()=> this.input(2)}/>
        <Button id = "three" number = "3" click={()=> this.input(3)}/>
        <Button id = "four" number = "4" click={()=> this.input(4)}/>
        <Button id = "five" number = "5" click={()=> this.input(5)}/>
        <Button id = "six" number = "6" click={()=> this.input(6)}/>
        <Button id = "seven" number = "7" click={()=> this.input(7)}/>
        <Button id = "eight" number = "8" click={()=> this.input(8)}/>
        <Button id = "nine" number = "9" click={()=> this.input(9)}/>
        <Button id = "equals" number = "=" click={this.total}/>
        <Button id = "plus" number = "+" click={this.add}/>
        <Button id = "minus" number = "-"/>
        <Button id = "times" number = "x"/>
        <Button id = "divide" number = "÷"/>
        <Button id = "clear" number = "CLEAR" click={this.clearScreen}/>
        <Screen id = "screen" value = {this.state.value}/>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button className = "button" id = {props.id} onClick = {props.click}>
      <h1>{props.number}</h1>
    </button>
  )
}

const Screen = (props) => {
  return (
    <h1 id = {props.id}>{props.value}</h1>
  )
}

export default App;
