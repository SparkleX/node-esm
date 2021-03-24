import {default as fs}  from "fs";
import {ClassA} from "./ClassA.js";

var a = new ClassA();
a.test();
fs.writeFileSync("1.txt", "123");
console.debug(1);