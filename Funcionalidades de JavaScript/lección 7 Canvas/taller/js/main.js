var canvas = document.getElementById("lienzo");
var context = canvas.getContext("2d");

var center = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

function draw() {
  context.beginPath();
  context.arc(center.x, center.y, 100, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.arc(center.x - 95, center.y - 100, 50, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.arc(center.x + 95, center.y - 100, 50, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();
}

draw();
