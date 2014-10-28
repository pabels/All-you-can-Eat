var restaurant = require("../restaurant");
var customer = require("../customer");
var assert = require("chai").assert;

describe('Main test', function () {

  it('create one restaurant', function () {
    var res1 = new restaurant.Restaurant('Maurice', 'Mexican', {
      menu: ['chila', 'blabla', 'chiles', 'carne'],
      direction: 'c/falsa123'
    });
    
    assert.equal(res1.name, 'Maurice');
    assert.equal(res1.type, 'Mexican');
    assert.equal(res1.menu[0], 'chila');
    
  });
  
  it('create one customer', function () {
    var cust1 = new customer.Customer('Pablo','c/virgen de loreto');
    assert.equal(cust1.name, 'Pablo');
    assert.equal(cust1.direction, 'c/virgen de loreto');
    
  });
});
