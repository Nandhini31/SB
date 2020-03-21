const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

export const addToDo = (todo, listId) => ({
  type: ADD_TODO,
  listId,
  todo
})

export const toggleTodo = (listId, todoId) => ({
  type: TOGGLE_TODO,
  listId,
  todoId
})

export const removeTodo = (listId, todoId) => ({
  type: REMOVE_TODO,
  listId,
  todoId
})
