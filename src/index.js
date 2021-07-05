import Canvas from "./canvas/Canvas";
import Level from "./canvas/Level";
import "./style.css";

const canvas = new Canvas("myCanvas");
const level = new Level(canvas);

const mainLoop = () => {
	level.frame();

	canvas.ctx.beginPath();
	canvas.ctx.rect(canvas.target.width / 2 - 50, 460, 100, 20);
	canvas.ctx.fillStyle = "red";
	canvas.ctx.fill();
	canvas.ctx.closePath();
	
	canvas.ctx.beginPath();
	canvas.ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
	canvas.ctx.fillStyle = "green";
	canvas.ctx.fill();
	canvas.ctx.closePath();
	
	window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
