import React from 'react'
import { FaPencilAlt, FaTrashAlt, FaCheck } from 'react-icons/fa'
function RenderTodo(props) {
  return (
    <div className='Todo-hold'>
        {props.Todo.map((Todo) =>(
          <div key={Todo.id} className='Todo'><small>{Todo.id}</small><p>{Todo.desc}</p><button><FaCheck/></button><button onClick={()=>props.UpdateTodo(Todo.desc)}><FaPencilAlt/></button><button onClick={()=>props.DeleteTodo(Todo.id)}><FaTrashAlt/></button></div>
        ))}
    </div>
  )
}

export default RenderTodo