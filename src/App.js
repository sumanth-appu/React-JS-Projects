import { Header } from './My component/Header';
import {Todos} from './My component/Todos';
import {Footer} from './My component/Footer';
import React, { useState ,useEffect} from 'react';
import './App.css';
import { AddTodo } from './My component/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I am onDelete form todo" , todo);

    setTodos(todos.filter((e)=>
    {
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding the todo",title,desc);
    let sno;
    if(todos.length==0)
        sno=0
    else
        sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  
  const [todos,setTodos]= useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
   <>
        <Header title={'My-TodoList'}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
   
   </>
  );
}

export default App;
