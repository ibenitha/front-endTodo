import React from 'react'
import { FaPencilAlt, FaTrashAlt, FaCheck } from 'react-icons/fa'
// import ReactScrollableFeed from 'react-scrollable-feed'
function RenderTodo(props) {
  return (
    <div className='Todo-hold'>
      {/* <ReactScrollableFeed className='Todo-hold-scroll'> */}
        {props.Todo.map((Todo) =>(
          <div key={Todo.id} className={`Todo ${Todo.completed == true && 'Todo_Completed'}`}><small>{Todo.id}</small><div className='Todo-P'><p>{Todo.desc}</p></div><button className={`${Todo.completed == true && 'CompletedBtn'}`} onClick={()=>props.handleComplete(Todo)}><FaCheck/></button><button onClick={()=>props.UpdateTodo(Todo)}><FaPencilAlt/></button><button onClick={()=>props.DeleteTodo(Todo.id)}><FaTrashAlt/></button></div>
        ))}
        {/* </ReactScrollableFeed> */}
    </div>
  )
}

export default RenderTodo