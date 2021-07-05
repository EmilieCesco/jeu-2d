
import backgound from "../img/background.jpg";

export default class Level {
	
	constructor (canvas) {
		
		this.canvas = canvas;
		this.image = new Image();
		this.image.src = backgound;
	}
	
	frame () {
		this.canvas.ctx.drawImage(this.image, 0, 0, 
			this.canvas.target.width, this.canvas.target.height);
	}
}