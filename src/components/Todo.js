import React, {Component} from "react"
import PropTypes from "prop-types"
import {TodoContainer, TodoItem, Checkbox} from "./styled"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/fontawesome-free-solid'
import {Item, IconContainer, ItemContainer} from "./styled/index"

class Todo extends Component {

  render() {
    const {todo, completed} = this.props
    return (
      <TodoContainer>
        <TodoItem style={{textDecoration: completed ? "line-through" : "none"}}>
          <ItemContainer><Checkbox type="checkbox" onClick={this.props.onClick} /><Item>{todo}</Item></ItemContainer>
          <IconContainer onClick={this.props.onDelete}><FontAwesomeIcon icon={faTrashAlt} color="#b3b3cc" /></IconContainer>
        </TodoItem>
      </TodoContainer>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  removed: PropTypes.bool
}

export default Todo
