import React, { useState } from "react";
import sytles from "./index.module.css";

const Home = ()=>{
    let [number,setNumber] = useState(0);
    const handleClick = ()=>{
        setNumber(++number)
    }
    return <div className={sytles.container}>
        <h1>HomePage</h1>
        <div className={sytles.bodyBtn}>
         <span>Click to add： </span>
         <button onClick={handleClick} >+</button>
         </div>
      
        <div className={sytles.bodyText}>{number}</div>
    </div>
}

export default Home;