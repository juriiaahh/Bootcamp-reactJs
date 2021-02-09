import React, { useContext } from "react"

// Context
import TodoContext from "../context/TodoContext"

const TodoForm = () => {
  const { setTodoTitle, createTodo, title } = useContext(TodoContext)

  const onCreateTodo = (e) => {
    e.preventDefault()

    if (title === "") {
      alert("Fill the form")
      return
    }

    createTodo(title)
  }

  return (
    <form
      className='flex justify-center items-center mt-4'
      onSubmit={onCreateTodo}
    >
      <input
        type='text'
        name='title'
        className='input'
        onChange={(e) => setTodoTitle(e.target.value)}
        value={title}
        placeholder='ketik disini...'
      />
      <button type='submit' className='btn'>
        Simpan
      </button>
    </form>
  )
}

export default TodoForm