import Canvas from "./canvas/Canvas";
import Controls from "./canvas/Controls";
import Level from "./canvas/Level";
import Player from "./perso/Player";
import "./style.css";

export const canvas = new Canvas("myCanvas");
export const controls = new Controls();

const level = new Level();
const player = new Player();

const mainLoop = () => {
	level.frame();
	player.frame();


	
	canvas.ctx.beginPath();
	canvas.ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
	canvas.ctx.fillStyle = "green";
	canvas.ctx.fill();
	canvas.ctx.closePath();
	
	window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
