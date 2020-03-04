import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import AddToDo from "./components/AddToDo"
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    return(
      <>
        <Header/>
        <AddToDo/>
      </>
    )
  }
}
