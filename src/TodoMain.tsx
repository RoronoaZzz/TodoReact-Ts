import './TodoMain.css'
import { TodoForm } from './TodoForm'

 export function TodoMain() : JSX.Element {

  return (
    <div className='container'>
      <h1>Todo</h1>
      <TodoForm />
    </div>
  )
}

