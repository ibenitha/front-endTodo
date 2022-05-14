import React,{useState} from 'react'

function AddNew(props) {
    const [newtodo,setnewTodo] = useState("")
    const handleAllChanges = (event) => {
        event.preventDefault()
        props.AddTodoList(newtodo)
        setnewTodo('')
    }
    const handleNewTodo = event =>{
        setnewTodo(event.target.value)
    }
    const handleUpdates = (event) => {
        props.setInputValues(event.target.value)
    }
  return (
    <div className="inputs">
    {props.edit ? (
      <form onSubmit={props.handleUpdateChanges}>
        <input type="text" value={props.inputValues} onChange={handleUpdates} />
        <button type="submit">Update</button>
    </form>
    ):(<form onSubmit={handleAllChanges}>
        <input type="text" placeholder="Add New" value={newtodo} onChange={handleNewTodo} />
        <button type="submit">Add</button>
    </form>)}
    </div>
  )
}

export default AddNew