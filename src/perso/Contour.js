import { canvas } from ".."

export default class Contour {

	constructor () {
		this.rectangle = {
			x: canvas.target.width / 2 - 325,
			y: canvas.target.height / 2 - 300,
			width: 650,
			height: 530
		};
	}

	frame() {
		canvas.ctx.beginPath();
		canvas.ctx.rect(this.rectangle.x, this.rectangle.y, 
			this.rectangle.width, this.rectangle.height);
		canvas.ctx.strokeStyle = "#33fff9";
		canvas.ctx.stroke();
		canvas.ctx.closePath();
	}
}