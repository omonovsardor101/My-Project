var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
//Box
c.fillStyle = "limegreen";
c.fillRect(0, 640, 1920, 300);
c.fillStyle = "deepskyblue";
c.fillRect(0, 0, 1920, 300);
console.log(canvas)

//Line
c.beginPath();
c.moveTo(0, 301);
c.lineTo(1920, 301);
c.strokeStyle ="red";
c.stroke();

c.beginPath();
c.moveTo(0, 639);
c.lineTo(1920, 639);
c.stroke();
c.strokeStyle ="red";

//Arc /Circle/Moon
c.beginPath();
c.arc(150, 100, 50, 1, Math.PI * 1.675, false);
c.fillStyle = "white";
c.fill();
c.beginPath();
c.arc(150, 100, 30, 0, Math.PI * 2, false);
c.fillStyle = "deepskyblue";
c.fill();
c.beginPath();
c.arc(152, 90 , 30, 0, Math.PI * 2, false);
c.fillStyle = "deepskyblue";
c.fill();
c.beginPath();
c.arc(160, 85 , 30, 0, Math.PI * 2, false);
c.fillStyle = "deepskyblue";
c.fill();
c.beginPath();
c.arc(152, 110 , 30, 0, Math.PI * 2, false);
c.fillStyle = "deepskyblue";
c.fill();
c.beginPath();
c.arc(160, 115 , 30, 0, Math.PI * 2, false);
c.fillStyle = "deepskyblue";
c.fill();

