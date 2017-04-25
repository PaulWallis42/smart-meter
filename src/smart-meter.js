function SmartMeter(){
  this.usage = 0;
}

SmartMeter.prototype.increaseUsage = function(num){
  this.usage += num;
}
