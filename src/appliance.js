function Appliance(energyRating){
  this.energyRating = energyRating;
  this.status = false;
}

Appliance.prototype.turnOn = function(){
  this.status = true;
}

Appliance.prototype.turnOff = function(){
  this.status = false;
}
