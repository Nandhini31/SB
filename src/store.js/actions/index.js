const ADD_TODO = 'ADD_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'

let toDoId = 0

export const addToDo = text => ({
  type: ADD_TODO,
  id: toDoId++,
  text
})
