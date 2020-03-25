import React, {Component} from "react"
import {connect} from "react-redux"
import ToDoList from "../components/ToDoList"
import {toggleTodo} from "../store/actions"
import {removeTodo} from "../store/actions"

class List extends Component {
  render() {
    const {todos, listId} = this.props
    const visibleTodos = todos.length >= 1 ? todos.filter(todos => !todos.removed) : []
    return (
      <ToDoList listId={listId} todos={visibleTodos} onClick={this.props.toggleTodo} onDelete={this.props.removeTodo} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: (listId, todoId) => dispatch(toggleTodo(listId, todoId)),
  removeTodo: (listId, todoId) => dispatch(removeTodo(listId, todoId))
})

export default connect(null, mapDispatchToProps)(List)
