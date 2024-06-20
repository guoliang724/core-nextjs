import React from "react";
import { StaticRouter } from "react-router-dom/server";
import Home from "../Pages/Home";


const App = ({ location, context}) => {    
    return <StaticRouter context={context} location={ location}>
        <Home/>
    </StaticRouter>
}

export default App;