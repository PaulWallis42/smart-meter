describe('Appliance', function(){

  var oven;

  beforeEach(function(){
    oven = new Appliance(2);
  });

  it('takes an energy rating', function(){
    expect(oven.energyRating).toEqual(2);
  });

  it('can be turned on', function(){
    oven.turnOn();
    expect(oven.status).toEqual(true);
  });

  it('can be turned off', function(){
    oven.turnOff();
    expect(oven.status).toEqual(false);
  });

});
