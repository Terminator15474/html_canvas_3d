import { vec3 } from "./util.js";

var canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = canvas.width;
let height = canvas.height;

/** @type {vec3} */
var veca = new vec3(1, 2, 3);
var vecb = new vec3(4, 5, 6);
console.log(veca.cross(vecb));

function convertToViewSpace(x, y) {
    return {
        x: (x+1) * width/2,
        y: (y+1) * height/2
    };
}