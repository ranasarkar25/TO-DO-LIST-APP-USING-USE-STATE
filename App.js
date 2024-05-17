import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App()
 {
 
  const [todos,setTodos] = useState([
    { id : 1 , title : "learn guitar" , completed : true },
    { id : 2 , title : "learn gita" , completed : false },
    { id : 3 , title : "learn guit" , completed : false },
  ]);

  const addTodo = ( newtodo ) => {
  setTodos( (prevstate) => [...prevstate,newtodo]);
  };
  
  const togglecompleted = ( id ) => {
    
    setTodos ( ( prevstate ) =>  {
      return prevstate.map((todo) => {

        if( todo.id === id )
        {
          return {...todo,completed : !todo.completed};
        }
        else
        {
          return todo;
        }

      });
    });
  };
 
  const removetodo = (id) => {

    setTodos( prevstate => {
      return prevstate.filter( ( todo ) => {
         return id !== todo.id;

      });

    });
  }

  return (
    <div >
     <h1 className="main-title">ToDoList</h1>
     <TodoForm addTodo={addTodo} />
     <Todos todos = {todos}  togglecompleted = { togglecompleted } removetodo = {removetodo }/>
    </div>
  );
}

export default App;
