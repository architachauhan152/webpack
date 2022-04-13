import { add, mult } from "./calc";
import "./styles.css";

import img from "../images/to-do.png";
console.log(add(5, 9));
console.log(add(10, 5));
console.log(mult(10, 6));

const navbar = document.createElement("div");
navbar.setAttribute("id", "navbar");
const navimg = new Image();
navimg.src = img;
navbar.appendChild(navimg);
const root = document.getElementById("root");
root.appendChild(navbar);

const inputdiv = document.createElement("div");
inputdiv.setAttribute("id", "idiv");
const form = document.createElement("form");
form.label = "Task Name";
//form.input
inputdiv.appendChild(form);
root.appendChild(inputdiv);
