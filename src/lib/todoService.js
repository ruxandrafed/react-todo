const baseUrl = "http://localhost:8080/todos";

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json());
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}

export const editTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}