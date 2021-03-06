  
import React from 'react'

import './assets/styles.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import TodoState from './context/TodoState'

const App = () => {
  return(
    <TodoState>
      <div className='container flex flex-col mt-4'>
        <h1 className='text-center'>Todo App Contextt</h1>

        <TodoForm />
        <div className='flex flex-col mt-4'>
          <TodoList />
        </div>
      </div>
    </TodoState>
  )
}

export default App;