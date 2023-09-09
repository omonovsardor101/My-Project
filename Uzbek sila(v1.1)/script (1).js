var canvas = document.querySelector('canvas');  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
console.log(canvas)
//Синий цвет
c.fillStyle = "deepskyblue";
c.fillRect(0, 0, 1920, 330);
//Зелёный цвет
c.fillStyle = "limegreen";
c.fillRect(0, 670, 1920, 330);

//Красные полосы
c.fillStyle = "red";
c.fillRect(0,330, 1920, 10)
//
c.fillRect(0,660, 1920, 10)

//Полумесяц
c.beginPath();
c.arc(200, 150, 100, 1, Math.PI * 1.675, false);
c.fillStyle = "white";
c.fill();
c.beginPath();
c.arc(230, 150, 90, 0, Math.PI * 1.675, false);
c.fillStyle = "deepskyblue";
c.fill();