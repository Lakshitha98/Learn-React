import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import Card from "./component/Card";
import Emoji from "./component/Emoji";
import "./App.css";
import emojipedia from "./emojipedia";
import nots from "./notes";
import Input from "./component/Input";
import Login from "./component/Login";
import Register from "./component/Register";
import React , {useState }from "react";
import Counter from "./component/Counter";
import Time from "./component/Time";
//import Objdes from "./component/Objdes";

import Event from "./component/Event";
import ComplexState from "./component/ComplexState";
// function createEntry(noteItem){
//   return (
//   <Note 
//     key={noteItem.key}
//     title={noteItem.title}
//     content={noteItem.content}
//   />
//   );
// }

// map Example
// {nots.map(noteItem =>(
//   <Note 
//     key={noteItem.key}
//     title={noteItem.title}
//     content={noteItem.content}
//   />
// ))}

// Ternary Operations

//      {check ? <Register /> : <Login />}

// function strike(){
//   document.getElementById("root").style.textDecoration = "line-through";
// }
/* <p>Buy Milk</p>
<p>Buy Milk</p>
<p>Buy Milk</p>
<button onClick={strike}>Change to strike through</button> */
//var check=true;
function App() {
  return(
    <div>
      <Counter />
    </div>
  )
}

export default App;
