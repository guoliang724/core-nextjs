import fs from "fs";

export default function(){
    const linkNames = fs.readdirSync("./public/css").filter(file=>file.endsWith(".css")).map(file=>
        `<link rel="stylesheet" href='./css/${file}'></link>`);
    console.log("linkNames: ",linkNames)
    return linkNames.join("\n");
}

