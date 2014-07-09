(function (root) {
  var Circles = root.Circles = (root.Circles || {});

  var Circle = Circles.Circle = function (centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  };

  Circle.MAX_RADIUS = 8;

  Circle.randomCircle = function (maxX, maxY) {
    return new Circle(
      maxX * 0.5 + (Math.random() * 20 - 10),// (0.5 * Math.random()),
      maxY * 0.5 + (Math.random() * 20 - 10),// (0.5 * Math.random()),
      Math.floor(Circle.MAX_RADIUS * Math.random() + 2)
    );
  };

  Circle.prototype.moveRandom = function (maxX, maxY) {
    var dx = (Math.random()*10) - 5;
    var dy = (Math.random()*10) - 5;
    
    var newX = Math.abs((this.centerX + (dx / this.radius)));
    var newY = Math.abs((this.centerY + (dy / this.radius)));
    if(!collision()){
      this.centerX = newX;
      this.centerY = newY;
    }
    if(this.centerX > (maxX - this.radius)){
      this.centerX = maxX - this.radius;
    }
    if(this.centerY > (maxY - this.radius)){
      this.centerY = maxY - this.radius;
    }
    //rectangle x :600 , 650 y: 400, 600
    if(this.centerY > 600 && this.centerY < 600){
      this.centerY = 600 - this.radius
    }
    if(this.centerX > 600 && this.centerX < 650){
      this.centerX = 600 - this.radius;
    }
  };
  //returns whether or not a collision occurs for the molecule
  var collision = function(x, y, radius){
    
  }

  Circle.prototype.render = function (ctx) {
    switch(this.radius) {
    case 2:
      ctx.fillStyle = "darkgreen";
      break;
    case 3: 
      ctx.fillStyle = "darkgreen";
      break;
    case 4: 
      ctx.fillStyle = "blue";
      break;
    case 5: 
      ctx.fillStyle = "blue";
      break;
    case 6: 
      ctx.fillStyle = "red";
      break;
    case 7: 
      ctx.fillStyle = "red";
      break;
    case 8: 
      ctx.fillStyle = "white";
      break;
    case 9: 
      ctx.fillStyle = "white";
      break;
    case 10: 
      ctx.fillStyle = "white";
      break;
    default: 
      ctx.fillStyle = "white";
  }
    

    ctx.beginPath();
  
    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  var Game = Circles.Game = function (xDim, yDim, numCircles) {
    this.xDim = xDim;
    this.yDim = yDim;

    this.circles = [];
    for (var i = 0; i < numCircles; ++i) {
      this.circles.push(Circle.randomCircle(xDim, yDim));
    }
  };

  Game.prototype.render = function (ctx) {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, this.xDim, this.yDim);
    ctx.fillStyle = "lightgray"
    ctx.fillRect(500,400, 100,100);
    this.circles.forEach(function (circle) {
      circle.render(ctx);
    });
  };

  Game.prototype.moveCircles = function () {
    var game = this;
    this.circles.forEach(function (circle) {
      circle.moveRandom(game.xDim, game.yDim);
    });
  };

  Game.prototype.start = function (canvasEl) {
    // get a 2d canvas drawing context. The canvas API lets us call
    // a `getContext` method on a canvas DOM element.
    var ctx = canvasEl.getContext("2d");

    // render at 10 FPS
    var game = this;
    window.setInterval(function () {
      game.moveCircles();
      game.render(ctx);
    }, 1);
  };
})(this);