import { Button } from './Button'

export function Todo({todos}){
    return todos.map(todo => {
        return <div className='container'>
            <h3>Title: {todo.title}</h3>
            <h4>Description: {todo.description}</h4>
            <Button title={todo.title} />
        </div>
    })
}