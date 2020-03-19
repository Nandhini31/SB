const ADD_TODO = 'ADD_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'

let toDoId = 0

export const addToDo = todo => ({
  type: ADD_TODO,
  id: toDoId++,
  todo
})
