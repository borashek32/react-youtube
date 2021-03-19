import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from './context';
import AddTodo from "./Todo/AddTodo";

const AddTodo = React.lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(import('./Todo/AddTodo'))
            }, 3000)
        })
)

function App() {
    let [todos, setTodos] = React.useState([])

function toggleTodo(id) {
    setTodos(
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
  )
}

function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title) {
    setTodos(todos.concat([
        {
        title,
        id: Date.now(),
        completed: false,
    }
    ]))
}

  return (
      <div className='wrapper'>
        <Context.Provider value={{removeTodo: removeTodo}}>
          <h1>React tutorial</h1>
          <AddTodo onCreate={addTodo}/>
            {todos.length ? (
                <TodoList todos={todos} onToggle={toggleTodo} />
            ) : (
                <p>No todos!</p>
            )}

          <TodoList todos={todos} onToggle={toggleTodo} />
        </Context.Provider>
      </div>
  )
}

export default App;
