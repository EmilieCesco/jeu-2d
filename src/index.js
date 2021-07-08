import Canvas from "./canvas/Canvas";
import Controls from "./canvas/Controls";
import Level from "./canvas/Level";
import Ball from "./perso/Ball";
import Brick from "./perso/Brick";
import Contour from "./perso/Contour";
import Player from "./perso/Player";
import "./style.css";

export const canvas = new Canvas("myCanvas");
export const controls = new Controls();

export const level = new Level();
export const player = new Player();
export const contour = new Contour();
export const ball = new Ball();

export const bricks = [
	new Brick(0 * 110, 1 * 25),
	new Brick(1 * 110, 1 * 25),
	new Brick(2 * 110, 1 * 25),
	new Brick(3 * 110, 1 * 25),
	new Brick(4 * 110, 1 * 25),
	new Brick(5 * 110, 1 * 25),
	new Brick(0 * 110, 2 * 25),
	new Brick(1 * 110, 2 * 25),
	new Brick(2 * 110, 2 * 25),
	new Brick(3 * 110, 2 * 25),
	new Brick(4 * 110, 2 * 25),
	new Brick(5 * 110, 2 * 25),
	new Brick(0 * 110, 3 * 25),
	new Brick(1 * 110, 3 * 25),
	new Brick(2 * 110, 3 * 25),
	new Brick(3 * 110, 3 * 25),
	new Brick(4 * 110, 3 * 25),
	new Brick(5 * 110, 3 * 25),
];

export const getOverlap = (rectangle1, rectangle2) => {
	const intersectionX1 = Math.max(rectangle1.x, rectangle2.x);
	const intersectionX2 = Math.min(rectangle1.x + rectangle1.width, rectangle2.x + rectangle2.width);
	if (intersectionX2 < intersectionX1) {
	  return null;
	}
  
	const intersectionY1 = Math.max(rectangle1.y, rectangle2.y);
	const intersectionY2 = Math.min(rectangle1.y + rectangle1.height, rectangle2.y + rectangle2.height);
	if (intersectionY2 < intersectionY1) {
	  return null;
	}
  
	return {
	  x: intersectionX1,
	  y: intersectionY1,
	  width: intersectionX2 - intersectionX1,
	  height: intersectionY2 - intersectionY1,
	};
}

const mainLoop = () => {
	level.frame();
	ball.frame();
	contour.frame();
	player.frame();
	
	bricks.forEach(brick => brick.frame());
	
	window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
