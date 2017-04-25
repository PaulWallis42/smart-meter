describe('Appliance', function(){

  var oven;

  beforeEach(function(){
    oven = new Appliance(2);
  });

  it('takes an energy rating', function(){
    expect(oven.energyRating).toEqual(2);
  });

  it('has an initial energy usage of zero', function(){
    expect(oven.energyUsage).toEqual(0);
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
