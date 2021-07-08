import { canvas, contour } from "..";
import ball from "../img/ball.png";

export default class Ball {
	constructor() {
		this.image = new Image();
		this.image.src = ball;
		this.rectangle = {
			x: contour.rectangle.x + contour.rectangle.width / 2,
			y: contour.rectangle.y + contour.rectangle.height / 2,
			width: 25,
			height: 25
		};
		this.directionX = "left";
		this.directionY = "top";
	}

	frame () {
		if (this.directionX === "left" && this.rectangle.x >= contour.rectangle.x)
			this.rectangle.x -= 3;
		else
			this.directionX = "right";

		if (this.directionX === "right" && this.rectangle.x <= contour.rectangle.x + contour.rectangle.width)
			this.rectangle.x += 3;
		else
			this.directionX = "left";

		if (this.directionY === "top" && this.rectangle.y >= contour.rectangle.y)
			this.rectangle.y -= 3;
		else
			this.directionY = "bottom";

		if (this.directionY === "bottom" && this.rectangle.y <= contour.rectangle.y + contour.rectangle.height)
			this.rectangle.y += 3;
		else
			this.directionY = "top";

		canvas.ctx.drawImage(this.image, this.rectangle.x, this.rectangle.y,
			this.rectangle.width, this.rectangle.height);
	}
}