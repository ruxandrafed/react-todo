export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const generateId = () => Math.floor(Math.random()*90000) + 10000;