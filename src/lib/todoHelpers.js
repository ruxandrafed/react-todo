export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const generateId = () => Math.floor(Math.random()*90000) + 10000;

export const findById = (id, array) => array.find(todo => todo.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (todos, updatedTodo) => {
  const updatedIndex = todos.findIndex(todo => todo.id === updatedTodo.id);
  return [
    ...todos.slice(0,updatedIndex),
    updatedTodo,
    ...todos.slice(updatedIndex+1)
  ]
};

export const removeTodo = (todos, id) => {
  const removedIndex = todos.findIndex(todo => todo.id === id);
  return [
    ...todos.slice(0,removedIndex),
    ...todos.slice(removedIndex+1)
  ]
};