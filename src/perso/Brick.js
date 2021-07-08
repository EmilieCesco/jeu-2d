import { ball, canvas, contour, getOverlap } from "..";
import brick from "../img/brick.png";

export default class Brick {

	constructor (x, y) {
		this.image = new Image();
		this.image.src = brick;
		this.break = false;
		this.rectangle = { 
			x: contour.rectangle.x + x, 
			y: contour.rectangle.y + y,
			width: 100,
			height: 20
	 	};
	}

	frame () {
		if (!this.break) {
			if(getOverlap(this.rectangle, ball.rectangle)){
				this.break = true;
				if (ball.rectangle.x > this.rectangle.x + this.rectangle.width / 2) {
					ball.directionX = "left";
				}
				else
					ball.directionX = "right";
					
				ball.directionY = ball.directionY === "top" ? "bottom" : "top";
			}

			canvas.ctx.drawImage(this.image, this.rectangle.x, this.rectangle.y, 
				this.rectangle.width, this.rectangle.height);
		}
	}
};