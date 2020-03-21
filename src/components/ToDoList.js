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
           return <Todo  key={item.id} 
            todo={item.todo} 
            completed={item.completed} 
            removed={item.removed} 
            onClick={() => this.props.onClick(item.todoId)} 
            onDelete={() => this.props.onDelete(item.todoId)} />
          })}
        </ul>}
      </>
    )
  }
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ToDoList
