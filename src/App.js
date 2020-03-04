import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    return(
      <Header/>
    )
  }
}
