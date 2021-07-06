
import { canvas } from "..";
import backgound from "../img/background.jpg";

export default class Level {
	
	constructor () {
		
		this.image = new Image();
		this.image.src = backgound;
	}
	
	frame () {
		canvas.ctx.drawImage(this.image, 0, 0, 
			canvas.target.width, canvas.target.height);
	}
}