import { renderToString } from "react-dom/server";
import App from "./app";
import React from "react";
import getScripts from "./getScripts";
import getLinks from "./getLinks";

export default (req,res)=>{
    const renderHtml = renderToString(<App/>);
    console.log(renderHtml);
        const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR</title>
        ${getLinks()}
    </head>
    <body>
        <div id="root">${renderHtml}
        </div>
        ${getScripts()}
    </body>
    </html>
    `
     res.send(html);
    }