var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 2;
context.rect(50, 350, 700, 400);
context.stroke();

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 10;
context.arc(200, 500, 100, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 10;
context.arc(400, 500, 100, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 10;
context.arc(600, 500, 100, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle = "yellow";
context.lineWidth = 10;
context.arc(300, 600, 100, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle = "green";
context.lineWidth = 10;
context.arc(500, 600, 100, 0, 360);
context.stroke();