window.onload = function(){

  var meter = new SmartMeter();
  var oven = new Appliance(2);
  var usageDisplay = document.getElementById('usage');
  var ovenDiv = document.getElementById('oven');

  setInterval(function(){
    usageDisplay.innerHTML = meter.usage;
  }, 1000);

  ovenDiv.onclick  = function(){
    if(oven.status){
      oven.turnOff();
    } else {
      oven.turnOn(meter);
    }
  }


}
