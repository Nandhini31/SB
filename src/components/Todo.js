import React, {Component} from "react"
import PropTypes from "prop-types"

class Todo extends Component {

  render(){
    const {todo, completed} = this.props
    return(
      <>
        <li style={{textDecoration: completed? "line-through": "none" }}>
          <input type="checkbox" onClick={this.props.onClick} />{todo}
          <button onClick={this.props.onDelete}>Delete</button>
        </li>
      </>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.array.isRequired,
  completed: PropTypes.bool.isRequired,
  removed: PropTypes.bool.isRequired
}

export default Todo
