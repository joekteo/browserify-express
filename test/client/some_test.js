'use strict';
var expect = require('chai').expect;
var some_func = require('../../app/js/some_func');

describe('testing the test', function() {
  it('should be true', function() {
    expect(true).to.eql(true);
  });

  it('should also be true', function() {
    expect(some_func()).to.be.true;
  });

  // it('should append p tag', function() {
  //   expect('#app').to.have.string('<p>Hello from javascript!</p>');
  //   });
});
