function Appliance(energyRating){
  this.energyRating = energyRating;
  this.status = false;
  this.myTimer;
}

Appliance.prototype.turnOn = function(meter){
  var _this = this;
  this.myTimer = setInterval(function(){
    meter.increaseUsage(_this.energyRating);
  }, 1000);
  this.status = true;
}

Appliance.prototype.turnOff = function(){
  clearInterval(this.myTimer);
  this.status = false;
}
