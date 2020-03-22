import React, {Component} from "react"
import PropTypes from "prop-types"
import {TodoContainer, TodoItem, Checkbox} from "./styled"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/fontawesome-free-solid'

class Todo extends Component {

  render(){
    const {todo, completed} = this.props
    return(
      <TodoContainer>
        <TodoItem style={{textDecoration: completed? "line-through": "none" }}>
          <Checkbox  type="checkbox" onClick={this.props.onClick} />{todo}
          <div onClick={this.props.onDelete}><FontAwesomeIcon icon={faTrashAlt} color="#b3b3cc" /></div>
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
