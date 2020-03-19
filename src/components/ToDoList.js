import React, {PureComponent} from "react"
import Todo from "./Todo"
import PropTypes from "prop-types"

class ToDoList extends PureComponent{
  render(){
    console.log("list props", this.props)
    return(
      <>
        {this.props.todos &&
         <ul>{this.props.todos.map((item) => {
            return <Todo todo={item.todo} />
          })}
        </ul>}
      </>
    )
  }
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default ToDoList
