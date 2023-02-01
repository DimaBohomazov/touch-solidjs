import type { Component } from "solid-js";
import "./assets/styles/base.css";
import "./assets/styles/index.css";

const App: Component = () => {
  return (
    <section class="todoapp" id="firstTodo">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list"></ul>
      </section>
      <footer class="footer">
        <span class="todo-count"></span>
        <ul class="filters">
          <li>
            <a href="#/" class="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
};

export default App;
