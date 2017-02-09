export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const generateId = () => Math.floor(Math.random()*90000) + 10000;

export const findById = (id, array) => array.find((todo) => todo.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});