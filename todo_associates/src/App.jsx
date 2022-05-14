import  React,{useState} from 'react'
import './App.css'
import AddNew from './components/AddNew'
import RenderTodo from './components/RenderTodo'
import {FaToggleOn } from 'react-icons/fa'
function App() {
  const dummyTodo= [{id:1,completed:false,desc:"Lorem Ipsum"},{id:2,completed:false,desc:"Lorem Ipsum"},{id:3,complete:false,desc:"Lorem Ipsum"}]
  const [Todo,setTodo]=useState(dummyTodo)
  const [theme,setTheme] = useState(false)
  const [inputValues,setInputValues] = useState('')
  const AddTodoList = (todoDesc) => {
    console.log(todoDesc);
    const TodoData = {
      id: Todo.length +1,
      completed:false,
      desc:todoDesc
    }
    const Todos= [...Todo,TodoData]
    setTodo(Todos);
    setInputValues(todoDesc)
  }
  const DeleteTodo = id => {
    const DeleteItem = Todo.filter((todo) => todo.id != id);
    setTodo(DeleteItem);
  }
  const UpdateTodo = id => {
    console.log(id);
  }
  return (
    <div className={`App ${theme && ' black-Mode'} `}>
      <div className="Title">
        <h1>My Tasks</h1>
        <i className="fa fa-dark" onClick={()=>setTheme((prev)=>!prev)}><FaToggleOn/></i>
      </div>
      <AddNew AddTodoList={AddTodoList}/>
      <RenderTodo Todo={Todo} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>
    </div>
  )
}

export default App
