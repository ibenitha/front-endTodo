import  React,{useState} from 'react'
import './App.css'
import AddNew from './components/AddNew'
import RenderTodo from './components/RenderTodo'

function App() {
  const dummyTodo= [{id:1,desc:"Lorem Ipsum"},{id:2,desc:"Lorem Ipsum"},{id:3,desc:"Lorem Ipsum"}]
  const [Todo,setTodo]=useState(dummyTodo)
  const AddTodoList = (todoDesc) => {
    console.log(todoDesc);
    const TodoData = {
      id: Todo.length +1,
      desc:todoDesc
    }
    const Todos= [...Todo,TodoData]
    setTodo(Todos);
  }
  return (
    <div className="App">
      <AddNew AddTodoList={AddTodoList}/>
      <RenderTodo Todo={Todo}/>
    </div>
  )
}

export default App
