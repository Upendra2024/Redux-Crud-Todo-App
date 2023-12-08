import { useState } from "react";
import { addTodo } from "./actions";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./todolist";

function App() {
  const dispatch = useDispatch();
  const [todoTitle,setTodoTitle] = useState("")

 const handleTodo = ()=>{
     if(todoTitle.trim()){
    const newTodo ={
      title : todoTitle
    }
    dispatch(addTodo(newTodo))
    setTodoTitle("")
}
  }

  return (
    <>
      <div className="container mt-5 w-50">
        <h2 className="text-primary text-center">Redux Todo-App</h2>

        <div className="input-group">
          <input type="text" className="form-control" value={todoTitle} onChange={(e)=>{setTodoTitle(e.target.value)}}/>
          <button className="btn btn-primary fs-4" onClick={()=>handleTodo()}>&#x2B; </button>
        </div>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
