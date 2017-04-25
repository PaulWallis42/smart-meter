describe('smart meter', function(){

  var meter;

  beforeEach(function(){
    meter = new SmartMeter();
  });

  it('initially has an energy usage of zero', function(){
    expect(meter.usage).toEqual(0);
  });

  it('can increase energy useage by 1', function(){
    meter.increaseUsage();
    expect(meter.usage).toEqual(1);
  });

  it('can reset the energy usage', function(){
    meter.increaseUsage();
    meter.reset();
    expect(meter.usage).toEqual(0);
  });

});
