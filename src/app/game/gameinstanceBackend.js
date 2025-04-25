const canvas = document.getElementById('canvasOne'); // set up for canvas, etc
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH =canvas.width = 1024;
const CANVAS_HEIGHT =canvas.height=576;

const scaledcanvas = {
    width: canvas.width /4,
    height: canvas.height /4
}

// couldn't get it to load in sadly

let placed = false;
// main js code
class Sprite { // sprite generate class for pin
    constructor({Position, imageSrc}) {
        this.Position = Position
        this.image = new Image()
        this.image.src = imageSrc
        
        
    }

    draw() {
        if (!this.image) {
			return;
		}
		ctx.drawImage(this.image, this.Position.Xposition, this.Position.Yposition);
    }

    update(){ // sprite update
        this.draw();
    }


}
class Player { // for the player osition on the canvas
    constructor({Position, CollisionDetectingBlocks,injump}){
        this.Position = Position
        this.Velocity = {
            Xposition: 0,
            Yposition: 1
        }
        this.width = 12
        this.height =16

    }
    draw(){
        // dev purposes
        ctx.fillStyle = 'green'
        ctx.fillRect(this.Position.Xposition,this.Position.Yposition,this.width,this.height)
    }

}

// object loads
const player =new Player({ // player load
    Position:{
    Xposition: 64,
    Yposition: 480,
    },
   
})
const psprite = new Sprite({ // create sprite object
    Position: {
        Xposition: player.Position.Xposition,
        Yposition: player.Position.Yposition,
    },

imageSrc: 'https://media.istockphoto.com/id/1164709269/vector/location-pin-icon-on-transparent-map-marker-sign-flat-style-map-point-symbol-map-pointer.jpg?s=612x612&w=0&k=20&c=nv2SO6T1OowdTmfJzpp1tK04Ijw748a1N2UeEacvV54=',

})

function animate(){ // main canvas animator

    window.requestAnimationFrame(animate)
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    ctx.scale(1, 1)
    ctx.translate(0,0,-background.image.height+scaledcanvas.height)

    player.update()
    psprite.update()

    ctx.restore()

    if(this.captureon >= 0){
        
    } 
}
function captureclicked(eleme, colour){  
let element = document.getElementById(eleme);
    element.style.background = "background 3.5s linear 2s";
    element.style.background = colour;
}
