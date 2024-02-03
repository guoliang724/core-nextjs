import React, { useState } from "react";

const Home = ()=>{
    let [number,setNumber] = useState(0);
    const handleClick = ()=>{
        console.log("+++++++++=handleClick")
        setNumber(++number)
    }
    return <div>
        <button onClick={handleClick}>+</button>
        <div>{number}</div>
    </div>
}

export default Home;