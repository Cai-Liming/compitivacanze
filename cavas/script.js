function startGame(){
    myGameArea.start();
    myGameArea.draw(redSquare);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width =500;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
draw : function (component){
    this.context.fillStyle = component.color; 
    this.context.fillRect(component.x ,component.y , component.width ,component.height);
    }
}

var redSquare= {
    width : 20,
    height : 20,
    x : 10,
    y : 120,
    color : "red"
};