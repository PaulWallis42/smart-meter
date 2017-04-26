window.onload = function(){

  var meter = new SmartMeter();
  var oven = new Appliance(2);
  var fridge = new Appliance(1);
  var heating = new Appliance(3);

  var usageDisplay = document.getElementById('usage');
  var ovenDiv = document.getElementById('oven');
  var fridgeDiv = document.getElementById('fridge');
  var heatingDiv = document.getElementById('heating');

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

  fridgeDiv.onclick = function(){
    if(fridge.status){
      fridge.turnOff();
    } else {
      fridge.turnOn(meter);
    }
  }

  heatingDiv.onclick = function(){
    if(heating.status){
      heating.turnOff();
    } else {
      heating.turnOn(meter);
    }
  }


}
