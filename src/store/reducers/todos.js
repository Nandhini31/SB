import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../constants"
import moment from "moment"

let todoId = 0

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
            todos: [...item.todos, {todo: action.todo, todoId: todoId++}]
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
              return todo.todoId === action.todoId ? {...todo, removed: true} : todo
            })
          }
        }
        return item
      })
      return {...state, listOfLists: [...removeNewList]} 
    case TOGGLE_TODO:
      let toggleListCopy = [...state.listOfLists]
      let toggleNewList = toggleListCopy.map((item) => {
        if (item.id === action.listId) {
          return {
            ...item,
            todos: item.todos.map((todo) => {
              return todo.todoId === action.todoId ? {...todo, completed: !todo.completed} : todo
            })
          }
        }
        return item
      })
      return {...state, listOfLists: [...toggleNewList]} 
    default:
      return state
  }
}
