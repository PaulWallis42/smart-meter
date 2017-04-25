describe('Appliance', function(){

  var oven, meter;

  beforeEach(function(){
    oven = new Appliance(2);
    meter = {
      increaseUsage: function(num){}
    }
    spyOn(meter, "increaseUsage")
  });

  it('takes an energy rating', function(){
    expect(oven.energyRating).toEqual(2);
  });

  it('can be turned off', function(){
    oven.turnOff();
    expect(oven.status).toEqual(false);
  });

  it('repeatedly calls function on a meter when turned on', function(){

    jasmine.clock().install();

    oven.turnOn(meter);

    expect(meter.increaseUsage).not.toHaveBeenCalled();

    jasmine.clock().tick(2001);

    expect(meter.increaseUsage.calls.count()).toEqual(2);

    jasmine.clock().uninstall();

    expect(oven.status).toEqual(true);
  });

  it('no longer increases energy usage when turned off', function(){

    jasmine.clock().install();

    oven.turnOn(meter);

    jasmine.clock().tick(2001);

    oven.turnOff();

    jasmine.clock().tick(1000);

    jasmine.clock().uninstall();

    expect(meter.increaseUsage.calls.count()).toEqual(2);

  });

});































/*
describe('Appliance', function(){

  var oven;

  beforeEach(function(){
    oven = new Appliance(2);
  });

  it('takes an energy rating', function(){
    expect(oven.energyRating).toEqual(2);
  });

  it('can be turned off', function(){
    oven.turnOff();
    expect(oven.status).toEqual(false);
  });

  it('increases energy usage continuously when turned on', function(){

    jasmine.clock().install();

    oven.turnOn();
    jasmine.clock().tick(2001);

    jasmine.clock().uninstall();

    expect(oven.status).toEqual(true);
    expect(oven.energyUsage).toEqual(4);
  });

  it('no longer increases energy usage when turned off', function(){

    jasmine.clock().install();

    oven.turnOn();
    jasmine.clock().tick(2001);
    oven.turnOff();
    jasmine.clock().tick(1000);

    jasmine.clock().uninstall();

    expect(oven.energyUsage).toEqual(4);
  });


});
*/
