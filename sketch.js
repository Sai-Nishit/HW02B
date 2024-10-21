const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const swappedRhombuses = [
    [{x: 100, y: 150}, {x: 250, y: 250}, {x: 100, y: 350}, {x: 50, y: 300}],
    [{x: 400, y: 150}, {x: 250, y: 250}, {x: 400, y: 350}, {x: 450, y: 300}],
    [{x: 250, y: 250}, {x: 100, y: 350}, {x: 250, y: 450}, {x: 200, y: 400}],
    [{x: 250, y: 250}, {x: 400, y: 350}, {x: 250, y: 450}, {x: 300, y: 400}],

    [{x: 175, y: 200}, {x: 250, y: 250}, {x: 325, y: 200}, {x: 250, y: 150}],
    [{x: 175, y: 200}, {x: 250, y: 250}, {x: 150, y: 300}, {x: 125, y: 250}],
    [{x: 325, y: 200}, {x: 250, y: 250}, {x: 350, y: 300}, {x: 375, y: 250}],
    [{x: 175, y: 300}, {x: 250, y: 250}, {x: 325, y: 300}, {x: 250, y: 350}],
];

const swappedTriangles = [
    [{x: 200, y: 100}, {x: 250, y: 150}, {x: 300, y: 100}],
    [{x: 200, y: 400}, {x: 250, y: 450}, {x: 300, y: 400}],
    [{x: 100, y: 250}, {x: 150, y: 300}, {x: 100, y: 350}],
    [{x: 400, y: 250}, {x: 450, y: 300}, {x: 400, y: 350}],
];

function drawPolygon(points, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fill();
}

swappedRhombuses.forEach(rhombus => drawPolygon(rhombus, "black"));

swappedTriangles.forEach(triangle => drawPolygon(triangle, "black"));
