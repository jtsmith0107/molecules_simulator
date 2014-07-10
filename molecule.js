(function (root) {
  var MoleculesSim = root.MoleculesSim = (root.MoleculesSim || {});

  var getColor = function(radius){
    if(radius < 3){
      return 'red';
    } else if(radius < 6){
      return 'green';
    } else if(radius < 9){
      return 'blue';
    } else{
      return 'darkgreen';
    }
  };

  var Molecule = MoleculesSim.Molecule = function(pos, vel, radius){

      MoleculesSim.MovingObject.call(this, pos, vel, radius, getColor(radius));
   };


   
   Molecule.inherits(MoleculesSim.MovingObject);   

   Molecule.RADIUS = 6;
 
   Molecule.randomMolecule = function (dimX, dimY) {
     var px = dimX * 0.5 + (Math.random() * 20 - 10);// (0.5 * Math.random()),
     var py = dimY * 0.5 + (Math.random() * 20 - 10);// (0.5 * Math.random()),
     // speed a proportion of the objects radius
     var vx = (Math.random() * 10 - 5)/Molecule.RADIUS;
     var vy = (Math.random() * 10 - 5)/Molecule.RADIUS;
     var rad = Math.floor(Molecule.RADIUS * Math.random() + 2);
     return new Molecule([px, py], [vx, vy], rad);
   };
   
   Molecule.prototype.move = function(){
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