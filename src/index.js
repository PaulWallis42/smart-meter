window.onload = function(){

  var meter = new SmartMeter();
  var oven = new Appliance(2);
  var fridge = new Appliance(1);
  var heating = new Appliance(3);

  var applianceArray = [oven, fridge, heating];

  var usageDisplay = document.getElementById('usage');
  var ovenDiv = document.getElementById('oven');
  var fridgeDiv = document.getElementById('fridge');
  var heatingDiv = document.getElementById('heating');

  setInterval(function(){
    usageDisplay.innerHTML = meter.usage;
    efficiency();
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

  function efficiency(){
    var efficiencyCount = 0;
    applianceArray.forEach(function(appliance){
      if(appliance.status){
        efficiencyCount ++;
      }
    });
    changeClass(efficiencyCount);
  }

  function changeClass(efficiencyCount){
    if(efficiencyCount <= 1){
      usageDisplay.className = "low";
    } else if (efficiencyCount == 2){
      usageDisplay.className = "medium";
    } else {
      usageDisplay.className = "high";
    }
  }

}
