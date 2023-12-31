import React,{useState} from 'react';


function Time(){
    setInterval(currTime, 1000);
    const now= new Date().toLocaleTimeString();
    //console.log(time);
    const [time,setTime]= useState(now);
    function currTime(){
        const newTime= new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return(
        <div className='container'>
        <h1>{time}</h1>
        <button onClick={currTime}>Get Time</button>
        </div>
    )
}

export default Time;