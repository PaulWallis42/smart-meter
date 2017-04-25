function Appliance(energyRating){
  this.energyRating = energyRating;
  this.status = false;
  this.energyUsage = 0;
  this.myTimer;
}

Appliance.prototype.turnOn = function(){
  var _this = this;
  this.myTimer = setInterval(function(){
    _this.energyUsage += _this.energyRating;
  }, 1000);
  this.status = true;
}

Appliance.prototype.turnOff = function(){
  clearInterval(this.myTimer);
  this.status = false;
}
