import {ADD_TODO} from "../constants"

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
      default: 
        return state
  }
}
