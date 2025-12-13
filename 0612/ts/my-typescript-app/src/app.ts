// app.ts
import avg from "./average";
import minValue from "./mathematics";
import { maxValueAndMinValue } from "./mathematics";
import { decompose } from "./mathematics";
import { toggleTheme } from "./darker";

const btn =document.getElementById("boton");
const sqr =document.getElementById("sqr");
const text =document.getElementById("text");

console.log(maxValueAndMinValue([6,0,3,2,4]))

console.log(minValue([6,9,4,5,0]));

console.log(avg([5, 4, 3, 12]));

console.log(decompose(100));

toggleTheme(btn!, sqr!, text!);