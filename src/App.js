import React, {Component} from "react"
import "./App.css"
// import List from "./containers/List"
// import AddToDo from "./containers/AddToDo"
import ListOfTodoList from "./containers/ListOfTodoList"

export default class App extends Component{

  render(){
    return(
      <>
        <ListOfTodoList/>
        {/* <List />
        <AddToDo /> */}
      </>
    )
  }
}
