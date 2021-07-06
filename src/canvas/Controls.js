export default class Controls
{
    constructor()
    {
		this.keysUp = {};
   		this.keysDown = {};

        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    onKeyDown(e)
    {
        this.keysDown[e.key] = true;
        this.keysUp[e.key] = false;
    }

	onKeyUp(e)
    {
        this.keysUp[e.key] = true;
        this.keysDown[e.key] = false;
    }
}