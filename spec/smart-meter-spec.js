describe('smart meter', function(){

  var meter;

  beforeEach(function(){
    meter = new SmartMeter();
  });

  it('initially has an energy usage of zero', function(){
    expect(meter.usage).toEqual(0);
  });

  it('takes an argument and adds it to the usage', function(){
    meter.increaseUsage(2);
    expect(meter.usage).toEqual(2);
  });

});
