import React, {Component} from "react"
import {connect} from "react-redux"
import ToDoList from "../components/ToDoList"
import {toggleTodo} from "../store/actions"
import {removeTodo} from "../store/actions"

class List extends Component{
  render(){
    console.log("props in list", this.props)
    const {todos} = this.props
    const visibleTodos = todos.length >= 1 ? todos.filter(todos => !todos.removed) : []
    return(
      // <ToDoList todos={todos} onClick={this.props.toggleTodo} onDelete={this.props.removeTodo}/>
      <ToDoList todos={visibleTodos} onClick={this.props.toggleTodo} onDelete={this.props.removeTodo} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(null,mapDispatchToProps)(List)
