import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "../constants"
import moment from "moment"

const initialState = {
  listOfLists: [{
    name: "Team to do list",
    id: 0,
    createdDate: moment().format('dddd D MMMM'),
    todos: [{
      todoId: 0,
      listId: 0,
      text: ""
    }]
  }]
}

export const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      // const getList = state.listOfLists.find((list) => list.id === action.listId)
      return {
        ...state,
        listOfLists: [
          ...state.listOfLists,
        ]
      }
  //   case TOGGLE_TODO:
  //     return state.map(todo => 
  //       todo.id === action.id ? {...todo, completed: !todo.completed} : todo
  //       )
  //   case REMOVE_TODO: 
  //     return state.map(todo =>
  //       todo.id === action.id ? {...todo, removed: true} : todo
  //     )
    default: 
      return state
   }  
}



export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const listId = action.listId
      // const getList = state.listOfLists.find((list) => list.id === action.listId)  
      return state.listOfLists.map((item, listId) => {
        if (item.id === listId) {
          return {
            ...state,
            listOfLists: [{...state.listOfLists, todos: [{...todos, todo: action.todo, todoId: action.id}]}]
          }
        }
        return state
      })
    default:
      return state
  }
}
