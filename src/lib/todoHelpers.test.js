import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = addTodo(startTodos, newTodo);
  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};

  const result = addTodo(startTodos, newTodo);
  expect(result).not.toBe(startTodos);
});

test('generateId should return a number', () => {
  const id = generateId();
  expect(typeof(id)).toBe('number');
  expect(id.toString().length).toEqual(5);
});

test('findById should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const expected = {id: 2, name: 'two', isComplete: false};

  const result = findById(2, startTodos);
  expect(result).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 1, name: 'one', isComplete: false};
  const expectedTodo = {id: 1, name: 'one', isComplete: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expectedTodo);
});

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id: 1, name: 'one', isComplete: false};
  const expectedTodo = {id: 1, name: 'one', isComplete: true};
  const result = toggleTodo(startTodo);
  expect(result).not.toBe(expectedTodo);
});

test('updateTodo should update an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: true};
  const expectedTodos =  [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = updateTodo(startTodos, updatedTodo);
  expect(result).toEqual(expectedTodos);
});

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: true};

  const result = updateTodo(startTodos, updatedTodo);
  expect(result).not.toBe(startTodos);
});

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const removedId = 2;
  const expectedTodos =  [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three',  isComplete: false}
  ];

  const result = removeTodo(startTodos, removedId);
  expect(result).toEqual(expectedTodos);
});

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const removedTodo = {id: 2, name: 'two', isComplete: true};

  const result = removeTodo(startTodos, removedTodo);
  expect(result).not.toBe(startTodos);
});

test('filterTodos should return all items for the root route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(startTodos, '/');
  expect(result).toEqual(startTodos);
});

test('filterTodos should return only completed items items for the /completed route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const expectedTodos = [
    {id: 2, name: 'two', isComplete: true},
  ];

  const result = filterTodos(startTodos, '/completed');
  expect(result).toEqual(expectedTodos);
});

test('filterTodos should return only active items items for the /active route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(startTodos, '/active');
  expect(result).toEqual(expectedTodos);
});