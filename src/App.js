import React, {Component} from "react"
import "./App.css"
import List from "./containers/List"
import AddToDo from "./containers/AddToDo"

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
        <AddToDo/>
        <List />
      </>
    )
  }
}
