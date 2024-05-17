import { useState } from 'react';
import { v4 as uuid } from "uuid"

import React from 'react'

function TodoForm({addTodo}) 
{
  const [title, setTitle] = useState("");

  function handleSubmit(e)
   {
    e.preventDefault();
    
    //if blank title kkept & added then a blank title box with id  will be added . to prevent it > 
    /*if( title.length === 0 )
    {
        alert("PLEASE GIVE INPUT");
        return;
    }*/

    //probelem with previous one is that if we give inout using space it will still be added . so correct way >
    if( title.trim().length === 0 )
    {
        alert( "Please Enter Again ");
        return;
    }
    
    const newTodo = {
        title : title,
        status : false,
        id : uuid()
    }


    addTodo(newTodo);
    setTitle("");
    // settitle("") --- done so that page donot refersh but clears input box once form submitted **

   }

   
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;
