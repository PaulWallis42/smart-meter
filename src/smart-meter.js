function SmartMeter(){
  this.usage = 0;
}

SmartMeter.prototype.increaseUsage = function(){
  this.usage ++;
}

SmartMeter.prototype.reset = function(){
  this.usage = 0;
}
