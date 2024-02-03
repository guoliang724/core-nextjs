import fs from "fs";

export default function(){
    const fileNames = fs.readdirSync("./public/js").filter(file=>file.endsWith(".js")).map(file=>`<script src='./js/${file}'></script>`);
    return fileNames.join("\n");
}

