import React, { Fragment, useState } from 'react'

// Set type
type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

export default function ToDo(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  // Toggle todo tasks as complete or incomplete
  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  // Remove todo tasks
  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Fragment>
      <h1> To Do List</h1>
      <form onSubmit={handleSubmit} data-testid="todoForm">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          data-testid="todoInput"
        />
        <button type="submit" data-testid="submitBtn">
          Add Todo
        </button>
      </form>
      <section data-testid="todoSection">
        {todos.map((todo: ITodo, index: number) => (
          // React need encapsulate element when use map() for each element
          <Fragment key={index}>
            <div
              style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
              {index}
              {todo.text}
            </div>
            <button
              id="setCompletetBtn"
              type="button"
              onClick={() => completeTodo(index)}>
              {' '}
              {todo.complete ? 'Incomplete' : 'Complete'} {''}
            </button>
            <button
              id="removetBtn"
              type="button"
              onClick={() => removeTodo(index)}>
              Remove
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  )
}
