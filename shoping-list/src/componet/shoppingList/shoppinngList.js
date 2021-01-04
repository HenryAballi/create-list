import React, { useState } from "react";
import { listInic } from "../const/const";


const ShoppingList = () => {
  const [list, setlist] = useState(listInic);
  const [nameAdd, setNameAdd] = useState("");

  const handleChange = (e) => {
    setNameAdd(e.target.value);
  }

  const addListAfterClick = (e) => {
    if(nameAdd === ""){
      return list;
    } else {
      console.log('test');
      setlist([...list, {className: "styleList", userName: nameAdd, id: list.length++}]);
      cleanerInput()
    }
  }

  const cleanerInput = () => {
    setNameAdd("");
  }

  return(
    <div>
      
        <input value={nameAdd} placeholder="name" onChange={handleChange} /> 
        <button onClick={addListAfterClick}>add</button>
        <ul>
          {
            list.map(({id, userName, className}) => {
              return <li id={id} key={id} className={className}>{userName}</li>
            })
          }
          
        </ul>
      
    </div>
  )
}

export default ShoppingList;