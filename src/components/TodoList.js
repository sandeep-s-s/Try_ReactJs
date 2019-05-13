import React from 'react'
import TodoItem from './TodoItem'
import TodoData from '../data/todosData'
function TodoList () {
  const todoItem = TodoData.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div>
      <br />
      <h2 className='text-danger'> Todo List</h2>
      { todoItem }
    </div>
  )
}

export default TodoList
