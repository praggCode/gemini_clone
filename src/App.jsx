import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Context } from "./context/context";

const App = () => { 
  return (
    <>
      <Sidebar Context={Context}/>
      <Main Context={Context}/>
    </>
  )
}
export default App;