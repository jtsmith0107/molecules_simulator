(function (root) {
  var MoleculesSim = root.MoleculesSim = (root.MoleculesSim || {});
                                         

  var MovingObject = MoleculesSim.MovingObject = function (pos, vel, radius, color){
    this.posX = pos[0];
    this.posY = pos[1];
    this.velX = vel[0];
    this.velY = vel[1];
    this.radius = radius;
    this.color = color;
  };
  
  MovingObject.prototype.move = function() {
    this.posX += this.velX;
    this.posY += this.velY;
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.posX,
      this.posY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distanceSq = Math.pow(otherObject.posX - this.posX, 2) +
                      Math.pow(otherObject.posY - this.posY, 2);
    var distance = Math.pow(distanceSq, 0.5);
    return distance < (this.radius + otherObject.radius);
  };

})(this);

