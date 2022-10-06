import React, {useState} from "react";

function App(){
    setInterval(updateTime,1000);
    const timez=new Date().toLocaleTimeString();
    const[time,setTime]=useState(timez);
function updateTime(){
    const newTime=new Date().toLocaleTimeString()
    setTime(newTime);
}
    return (<div className="box">
    <center>
    <h1 id="TIME">{time}</h1>
    <br></br>
    <button id="GetTime" onClick={updateTime}>Get Time</button>
    </center>

    </div>

    );
};
export default App;