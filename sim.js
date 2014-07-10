(function (root) {
  var MoleculesSim = root.MoleculesSim = (root.MoleculesSim || {});
  
  var Simulator = MoleculesSim.Simulator = function(ctx){
    this. ctx = ctx.getContext("2d");
    this.cells = [];
    this.molecules = [];
    
  };
  
  Simulator.prototype.DIMX = 800;
  Simulator.prototype.DIMY = 400;
  
  Simulator.prototype.addCells = function(numCells){
    for(var i = 0; i < numCells; i++){
      var c = MoleculesSim.Cell.randomCell(this.DIMX, this.DIMY);
      this.cells.push(c);
    }
  };
  
  Simulator.prototype.addMolecules = function(numMolecules){
    for(var i = 0; i < numMolecules; i++){
      var c = MoleculesSim.Molecule.randomMolecule(this.DIMX, this.DIMY);
      this.cells.push(c);
    }
  };
  
  Simulator.prototype.draw = function(){
    for(var i = 0; i < this.cells.length; i++){
      this.cells[i].draw(this.ctx);
    }
    
    for(var j = 0; j < this.molecules.length; j++){
      this.molecules[j].draw(this.ctx);
    }
  };
  
  Simulator.prototype.move = function(){
    for(var i = 0; i < this.cells.length; i++){
      this.cells[i].move();
    }
    for(var j = 0; j < this.molecules.length; j++){
      this.molecules[j].move();
    }
  };
  
  Simulator.prototype.checkCollisions = function(){
    for(var i = 0; i < this.cells.length; i++){
      for(var j = 0; j < this.molecules.length; j++ ){
        if(this.cells[i].isCollidedWith(this.molecules[j])){

        }
      }

    }
  }
  
  Simulator.prototype.step = function(){
    this.ctx.clearRect(0,0,this.DIMX, this.DIMY);
    
    this.move();
    this.draw();
        
  };
  
  
 
  Simulator.prototype.intervalId = undefined;
  
  Simulator.prototype.start = function(){
    this.intervalId = setInterval(this.step.bind(this), this.FPS);
    this.addCells(8);
    this.addMolecules(200);
  };
})(this);
  