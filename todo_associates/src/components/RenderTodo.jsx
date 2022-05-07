import React from 'react'

function RenderTodo(props) {
  return (
    <div>
        {props.Todo.map((Todo) =>(
            <div key={Todo.id}><p>{Todo.desc}</p></div>
        ))}
    </div>
  )
}

export default RenderTodo