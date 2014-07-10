(function (root) {
  var MoleculesSim = root.MoleculesSim = (root.MoleculesSim || {});

  var Cell = MoleculesSim.Cell = function(pos, vel, radius){
    
    MoleculesSim.MovingObject.call(this, pos, vel, radius, Cell.COLOR);
   };

   Cell.inherits(MoleculesSim.MovingObject);

   Cell.COLOR = 'black';

   Cell.RADIUS = 40;
 
   Cell.randomCell = function (dimX, dimY) {
     var px = Math.random() * dimX;
     var py = Math.random() * dimY;
     // speed a proportion of the objects radius
     var vx = (Math.random() * 10 - 5)/Cell.RADIUS;
     var vy = (Math.random() * 10 - 5)/Cell.RADIUS;
     var rad = Math.random() * 2 + Cell.RADIUS;
     return new Cell([px, py], [vx, vy], rad);
   };
   
   Cell.prototype.move = function(){
     var dx = (Math.random()*10) - 5;
     var dy = (Math.random()*10) - 5;
    
     var newX = Math.abs((this.posX + (dx / this.radius)));
     var newY = Math.abs((this.posY + (dy / this.radius)));
     // if(!collision()){
       this.posX = newX;
       this.posY = newY;
     // }
   };
   

 
})(this);