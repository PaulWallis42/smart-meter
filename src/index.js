window.onload = function(){

  var oven = new Appliance(2);
  var usageDisplay = document.getElementById('usage');
  var ovenDiv = document.getElementById('oven');

  (function(){
    setInterval(function(){
      usageDisplay.innerHTML = oven.energyUsage;
    }, 1000)
  })();

  ovenDiv.onclick  = function(){
    if(oven.status){
      oven.turnOff();
    } else {
      oven.turnOn();
    }
  }


}
