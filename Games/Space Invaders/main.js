const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Player{
    constructor(x,y,width, height){
        this.x =x;
        this.y =y; 
        this.width = width; 
        this.height = height; 
        this.speed = 5; 
    }

    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        this.x -= this.speed; 
        if(this.x<0){
            this.x=0;
        }
    }
    moveRight(){
        this.x += this.speed; 
        if(this.x + this.width > canvas.width){
            this.x = canvas.width - this.width; 
        }
    }
}
class Bullet{
    constructor(x,y,width, height, speed){
        this.x =x;
        this.y =y; 
        this.width = width; 
        this.height = height; 
        this.speed = speed; 
    }
    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.y -= this.speed; 
    }
    }




const alienRows = 4; 
const alienColumns = 10; 
const alienWidth = 40;
const alienHeight = 30;
const alienPadding = 10; 
let alienDirection = 1; 
let alienMoveDown = false; 

const keyStates = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
};

function update(){

}
function draw(){

}
function gameLoop(){
    if(isGameOver()){
        alert("Game Over");
        return;
    }

    update();
    draw();

    requestAnimationFrame(gameLoop);
}

function handleKeyDown(e){
    if(e.code in keyStates){
        keyStates[e.code] = true;
    }
}
function handleKeyUp(e){
    if(e.code in keyStates){
        keyStates[e.code] = false;
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

gameLoop();