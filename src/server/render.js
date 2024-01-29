import { renderToString } from "react-dom/server";
import App from "./app";
import React from "react";

export default (req,res)=>{
    const renderHtml = renderToString(<App/>);
    console.log(renderHtml);
        const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${renderHtml}
    </body>
    </html>
    `
     res.send(html);
    }