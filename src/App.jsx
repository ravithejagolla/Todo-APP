import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo ,removeTodo} from './slices/todosSlice'
import { v4 as uuid } from 'uuid'

import './App.css'

function App() {
  const [inputtext, setinputtext] = useState()
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.todos)

  console.log(todos)

  const onAddclick = () => {
    dispatch(addTodo({
      id: uuid(),
      todos: inputtext
    }))
    setinputtext('')
  }
  const onDeleteClick = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <>
      <div className='App bg-slate-200 w-screen h-screen'>
        <h1 className='text-4xl flex place-content-center'>Todo App</h1>
        <div>
          <input
            onChange={(e) => setinputtext(e.target.value)}
            className='border-2 border-gray-300 p-2 w-50 ml-135 mt-7'
            type='text'
            placeholder='Add a new todo...'
            value={inputtext} />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7 ml-5'
            onClick={onAddclick}> Add </button>
        </div>
        {
        todos.length > 0 && todos.map(todo => (
          <div key={todo.id} className='p-2 w-50 ml-135 mt-3 '>
            <span className='text-2xl' > {todo.todos}</span>
            <button onClick={() => onDeleteClick(todo.id)}className='ml-3 p-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded '>Delete</button>
          </div>
        ))
        }

      </div>

    </>
  )
}
export default App
