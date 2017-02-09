import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JsX', isComplete: true},
        {id: 2, name: 'Build an awesome app', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this); // binding this to the correct context
  }
  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input
              type="text"
              defaultValue={this.state.currentTodo}
              onChange={this.handleInputChange}
            />
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id} >
                  <input type="checkbox" defaultChecked={todo.isComplete}/>
                  {todo.name}
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
