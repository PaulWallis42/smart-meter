window.onload = function(){

  var meter = new SmartMeter();
  var usageDispaly = document.getElementById('usage');
  var oven = document.getElementById('oven');
  var ovenStatus = false;
  var myTimer;

  displayUsage();

  function displayUsage(){
    usageDispaly.innerHTML = meter.usage;
  }

  oven.onclick = function(){
    if(ovenStatus == false){
      startTimer();
      ovenStatus = true;
    } else {
      clearTimer();
      ovenStatus = false;
    }
  }

  function startTimer(){
    myTimer = setInterval(function(){
      meter.increaseUsage();
      displayUsage();
    }, 1000);
  }

  function clearTimer(){
    clearInterval(myTimer);
  }

}
