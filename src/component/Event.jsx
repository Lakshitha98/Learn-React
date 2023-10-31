import React,{useState} from "react";
import Input from "./Input";
function Event() {
    const [headingText, setHeadingText]= useState("Hello");
    const [isMousedOver, setMousedOver] = useState(false);

    function handleClick(){
        //console.log("Clicked");
        setHeadingText("Submitted");
    }
    function handleMouseOver(){
        //console.log("badu wada uttoo");
        setMousedOver(true);
    }
    function handleMouseOut(){
        setMousedOver(false);
    }

  return (
    <div>
      <form className="form">
        <h1>Hello</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit" style={{backgroundColor:isMousedOver? "black":"white"}} onClick={handleClick} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>Login</button>
      </form>
    </div>
  );
}

export default Event;
