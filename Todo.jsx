import React from 'react'

function Todo({id,completed,title , togglecompleted , removetodo }) 
{
 
  return (
    <div style={{
        border: "2px solid #242424",
        padding : "1rem",
        margin : "1rem",
      }}>

      <p>Title : {title}</p>
      <p>Status : { completed ? "Done" : "Undone" } </p>
      <input type='checkbox' checked = {completed} onChange = {  () => { return togglecompleted(id); }} />   
      <br/>   
      <button onClick={ () => removetodo(id) } >Remove</button>
    </div>
  );
}

export default Todo
