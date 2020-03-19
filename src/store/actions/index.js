const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

let toDoId = 0

export const addToDo = todo => ({
  type: ADD_TODO,
  id: toDoId++,
  todo
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})
