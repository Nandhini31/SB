import React, {Component} from "react"
import {connect} from "react-redux"
import ToDoList from "../components/ToDoList"
import {toggleTodo} from "../store/actions"
import {removeTodo} from "../store/actions"

class List extends Component{
  render(){
    return(
      <ToDoList todos={this.props.todos} onClick={this.props.toggleTodo} onDelete={this.props.removeTodo}/>
    )
  }
}

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
