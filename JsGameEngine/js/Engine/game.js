//import Camera from "./camera.js"
class Game{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.gameObjects = [];
        this.gameObjectsToRemove = [];
        this.lastFrameTime = 0;
        this.deltaTime = 0;
        this.resizeCanvas();
        window.addEventListener("resize",()=> this.resizeCanvas());
        //this.camera = new Camera(null, this.canvas.width, this.canvas.height);
    }
}