import  React,{useState,useEffect} from 'react'
import './App.css'
import AddNew from './components/AddNew'
import RenderTodo from './components/RenderTodo'
import {FaToggleOn } from 'react-icons/fa'
function App() {
  const dummyTodo= [{id:1,completed:false,desc:"Lorem Ipsum"},{id:2,completed:false,desc:"Lorem Ipsum"},{id:3,complete:false,desc:"Lorem Ipsum"}]
  const [Todo,setTodo]=useState(dummyTodo)
  const gettheme = ()=>{
    return JSON.parse(localStorage.getItem('theme')) || false
  }
  const [theme,setTheme] = useState(gettheme())
  const [inputValues,setInputValues] = useState('')
  const [todoObj,setTodoObj] = useState('')
  const [edit,setEdit] = useState(false)
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
  const UpdateTodo = todobj => {
    setEdit(true);
    setTodoObj(todobj);
    setInputValues(todobj.desc);
  }
  const handleUpdateChanges = (e) => {
    e.preventDefault();
    setTodo(Todo.map((todo) =>{
      if(todo.id === todoObj.id) {
        return {...todoObj,desc: inputValues};
      }
      return todo;
    }))
    setInputValues('')
    setEdit(false)
  }
  const handleComplete = todoCompleteObj => {
    setTodo(Todo.map((todo) =>{
      if(todo.id === todoCompleteObj.id) {
        return {...todoCompleteObj,completed: true};
      }
      return todo;
    }
    ))
  }
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme])
  
  return (
    <div className={`App ${theme && ' black-Mode'} `}>
      <div className="Title">
        <h1>My Tasks</h1>
        <i className="fa fa-dark" onClick={()=>setTheme((prev)=>!prev)}><FaToggleOn/></i>
      </div>
      <AddNew AddTodoList={AddTodoList} edit={edit} inputValues={inputValues} setInputValues={setInputValues} handleUpdateChanges={handleUpdateChanges}/>
      <RenderTodo Todo={Todo} handleComplete={handleComplete} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>
    </div>
  )
}

export default App
