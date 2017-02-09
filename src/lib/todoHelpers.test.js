import {addTodo, generateId, findById, toggleTodo} from './todoHelpers';

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

test.skip('updateTodo should update an item by id', () => {

});

test.skip('updateTodo should not mutate the original array', () => {

});