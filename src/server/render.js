import { renderToString } from "react-dom/server";
import React from "react";
import App from "./App";
import getHtml from "./getHtml";

export default (req, res) => {
  const context = {};
  const ComponentHTML = renderToString(
    <App location={req.path} context={context} />
  );
  console.log(ComponentHTML);
  getHtml(ComponentHTML);
  res.send(html);
};
