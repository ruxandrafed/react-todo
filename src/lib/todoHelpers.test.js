import {addTodo, generateId} from './todoHelpers';

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