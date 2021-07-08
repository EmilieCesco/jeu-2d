import { canvas, controls, contour, ball, getOverlap } from "..";

export default class Player {

	constructor() {
		this.rectangle = { 
			x: canvas.target.width / 2 - 50, 
			y: 460,
			width: 100,
			height: 20
	 	};
	}

	frame () {
		if (controls.keysDown["ArrowRight"] && this.rectangle.x <= contour.rectangle.x 
			+ contour.rectangle.width - this.rectangle.width) {
			this.rectangle.x += 8;
		}
		if (controls.keysDown["ArrowLeft"] && this.rectangle.x >= contour.rectangle.x) {
			this.rectangle.x -= 8;
		}
		if (getOverlap(this.rectangle, ball.rectangle))
		{
			if (ball.rectangle.x > this.rectangle.x + this.rectangle.width / 2) {
				ball.directionX = "left";
			}
			else
				ball.directionX = "right";
				
			ball.directionY = ball.directionY === "top" ? "bottom" : "top";
		}

		canvas.ctx.beginPath();
		canvas.ctx.rect(this.rectangle.x, this.rectangle.y, 
			this.rectangle.width, this.rectangle.height);
		canvas.ctx.fillStyle = "cyan";
		canvas.ctx.fill();
		canvas.ctx.closePath();
	}
};

