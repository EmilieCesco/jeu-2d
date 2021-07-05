export default class Canvas {

	constructor(id) {

		this.target = document.getElementById(id);
		this.ctx = this.target.getContext("2d");

		this.target.width = window.innerWidth;
		this.target.height = window.innerHeight;
		this.ctx.fillRect(0,0, this.target.width, this.target.height);
	}

}