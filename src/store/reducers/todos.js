import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../constants"
import moment from "moment"

const initialState = {
  listOfLists: [{
    name: "Team to do list",
    id: 0,
    createdDate: moment().format('dddd D MMMM'),
    todos: []
  }]
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let listCopy = [...state.listOfLists]
      let newList=listCopy.map((item) => {
        if(item.id === action.listId){
          return {
            ...item,
            todos: [...item.todos, {todo: action.todo, todoId: action.todoId}]
          }
        }
        return item
      })
      return {...state, listOfLists: [...newList]} 
    case REMOVE_TODO:
      let removeListCopy = [...state.listOfLists]
      let removeNewList = removeListCopy.map((item) => {
        if (item.id === action.listId) {
          return {
            ...item,
            todos: item.todos.map((todo) => {
              return todo.id ===action.todoId ? {...todo, removed: true} : todo
            })
          }
        }
        return item
      })
      console.log("state in reducer", {...state, listOfLists: [...removeNewList]}  )
      return {...state, listOfLists: [...removeNewList]} 
    case TOGGLE_TODO:
      let toggleListCopy = [...state.listOfLists]
      let toggleNewList = toggleListCopy.map((item) => {
        if (item.id === action.listId) {
          return {
            ...item,
            todos: item.todos.map((todo) => {
              return todo.id === action.todoId ? {...todo, completed: true} : todo
            })
          }
        }
        return item
      })
      console.log("state in reducer", {...state, listOfLists: [...toggleNewList]})
      return {...state, listOfLists: [...toggleNewList]} 
    default:
      return state
  }
}
