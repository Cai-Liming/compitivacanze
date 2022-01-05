function startGame(){
    myGameArea.start();
    myGameArea.draw(redSquare);
    animatedObject.loadImages();
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width =500;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval =setInterval(updateGameArea, 20);
    },
draw : function (component){
    this.context.fillStyle = component.color; 
    this.context.fillRect(component.x ,component.y , component.width ,component.height);
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    move: function() {
        redSquare.x = redSquare.x + redSquare.speedX;
        redSquare.y = redSquare.y + redSquare.speedY;
    },
    drawGameObject: function(gameObject) {
        this.context.drawImage(
          gameObject.image,
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
      },

}

var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 60,
    height: 60,
    x: 10,
    y: 120,
    imageList: [], //Vettore che conterrà tutte le immagini caricate
    contaFrame: 0, //Tiene conto di quanti frame sono passati
    actualFrame: 0, //Specifica quale frame disegnare
  
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
      if (this.contaFrame == 50) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        //console.log(this.actualFrame);
        this.image = this.imageList[this.actualFrame];
      }
    },
  
    loadImages: function() {
       for (imgPath of walking) {
        var img = new Image(this.width, this.height);
        img.src = imgPath;
        this.imageList.push(img);
        //console.log(img);
      }
      this.image = this.imageList[this.actualFrame];
    }
  };
var redSquare= {
    width : 20,
    height : 20,
    x : 10,
    y : 120,
    color : "red",
    speedY : 0,
    speedX : 0,
};

function moveup() {
    redSquare.y -=30;
}
function movedown() {
    redSquare.y +=30;
}
function moveleft() {
    redSquare.x -=30;
}
function moveright() {
    redSquare.x +=30;
}


function updateGameArea(){
    myGameArea.clear();
    myGameArea.move();
   myGameArea.draw(redSquare);
    myGameArea.drawGameObject(animatedObject);
    animatedObject.update();
}
