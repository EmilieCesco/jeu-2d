import { canvas, controls } from "..";

export default class Player {

	constructor() {
		this.position = { x: canvas.target.width / 2 - 50, y: 460 };
	}

	frame () {
		if (controls.keysDown["ArrowRight"]) {
			this.position.x += 8;
		}
		if (controls.keysDown["ArrowLeft"]) {
			this.position.x -= 8;
		}

		canvas.ctx.beginPath();
		canvas.ctx.rect(this.position.x, this.position.y, 100, 20);
		canvas.ctx.fillStyle = "red";
		canvas.ctx.fill();
		canvas.ctx.closePath();
	}
};

