import React from "react";
import { BrowserRouter } from "react-router-dom"

import RouteApp from "../routes/RouteApp";
import "../assets/global.css"

const App =  ()=>{
    return <BrowserRouter>
        <RouteApp/>
    </BrowserRouter>;
}

export default App;