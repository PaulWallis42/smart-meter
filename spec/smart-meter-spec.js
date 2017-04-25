describe('smart meter', function(){

  var meter;

  beforeEach(function(){
    meter = new SmartMeter();
  });

  it('initially has an energy usage of zero', function(){
    expect(meter.usage).toEqual(0);
  });

  

});
