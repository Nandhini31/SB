import React, {Component} from "react"
import {connect} from "react-redux"
import ToDoList from "../components/ToDoList"

class List extends Component{
  render(){
    console.log("props in list", this.props)
    return(
      <ToDoList todos={this.props.todos}/>
    )
  }
}

const mapStateToProps = state => ({
  todos: state
})

export default connect(mapStateToProps)(List)
