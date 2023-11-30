import GameObject from "../Engine/gameobject";
import Renderer from "../Engine/renderer";
import Physics from "../Engine/physics";
import Input from "../Engine/input";
import {Images} from "..Engine/resources.js";
//import Enemy from "./enemy.js";
import Platform from "./platform.js";
import Collectible from "./collectible.js";
import ParticleSystem from "../Engine/particlesystem.js";

class Player extends GameObject{
    constructor(x,y){
        super(x,y);
        this.renderer = new Renderer("blue",50,50, Images.player);
        this.addComponent(this.renderer);
        this.addComponent(new Physics({x:0,y:0},{x:0,y:0}));
        this.addComponent(new Input());

        this.direction = 1;
        this.lives = 3; 
        this.score = 0;
        this.isOnPlatform = false; 
        this.isJumping = false;
        this.jumpForce = 400;
        this.jumpTime = .3;
        this.jumpTimer = 0;
        this.isInvulnerable = false; 
        this.isGamepadMovement = false; 
        this.isGamepadJump = false; 
    }

    update(deltaTime){
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        this.handleGamepadInput(input);

        if(!this.isGamepadMovement && input.isKeyDown("ArrowRight")){
        physics.velocity.x = 100;
        this.direction = -1;
        } else if(!this.isGamepadMovement && input.isKeyDown("ArrowLeft")){
        physics.velocity.x = -100;
        this.direction = 1;
        } else if (!this.isGamepadMovement){
        physics.velocity.x = 0;
        }
    }
}