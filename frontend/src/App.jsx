import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo} from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  // fetch('http://localhost:3000/todos')
  // .then(async (js) => {
  //     const resp = await js.json();
  //     setTodos(resp.map(todo => {
  //       return {
  //         title: todo.title,
  //         description: todo.description,
  //         completed: todo.completed
  //       }
  //     }))
  // })
  
  return (
    <>
      <div className='top-container'>
        <CreateTodo todos={todos} setTodos={setTodos} />
      </div>
      <div className='bottom-container'>
        <Todo todos={todos} />
      </div>
    </>
  )
}

export default App
