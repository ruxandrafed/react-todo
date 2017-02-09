import React from 'react';

export const TodoForm = (props) => (
  <form>
    <input
      type="text"
      defaultValue={props.currentTodo}
      onChange={props.handleInputChange}
    />
  </form>
);