export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const generateId = () => Math.floor(Math.random()*90000) + 10000;

export const findById = (id, array) => {
  return array.find((todo) => {
    return todo.id === id;
  });
};