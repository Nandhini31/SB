import React, {Component} from "react"
import PropTypes from "prop-types"

class Todo extends Component {
  render(){
    const {todo} = this.props
    return(
     <li>{todo}</li>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.array.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo
