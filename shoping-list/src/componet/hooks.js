import React, { useState, useEffect } from 'react';
import "./hooks.css"

const  Hooks = () => {

  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount(count + 1);
    console.log("add...");
}

const removeClick = () => {
  if(count > 0) {
    setCount(count -1)
  }
  return count;
}


  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className= "hooks">
      <p>You clicked <span>{count}</span> times</p>
      <button onClick={addClick}>
        Click me
      </button>
      <button onClick={removeClick}>remove</button>
    </div>
  );
}

export default Hooks;