import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "../constants"

export const todos= (state=[], action) => {
  switch(action.type) {
    
    case ADD_TODO:
      return[
        ...state,
        {
          id: action.id,
          todo: action.todo,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        )
    case REMOVE_TODO: 
      return [
        ...state,
          state.filter(todo => todo.id === action.id)
      ]
    default: 
        return state
  }
}
