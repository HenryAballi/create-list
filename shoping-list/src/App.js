import React from "react";
import './App.css';
import ShoppingList from "./componet/shoppingList/shoppinngList";
import Hooks from "./componet/hooks";
import Nav from "./componet/nav/nav";


function App() {
  return (
    <div className="">
      <Nav/>
      <h1>React-Hooks</h1>
      <Hooks/>
      <ShoppingList/>
    </div>
  );
}

export default App;
