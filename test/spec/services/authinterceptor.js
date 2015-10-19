'use strict';

describe('Service: authInterceptor', function () {

  // load the service's module
  beforeEach(module('psJwtApp'));

  // instantiate service
  var authinterceptor;
  beforeEach(inject(function (_authinterceptor_) {
    authInterceptor = _authinterceptor_;
  }));

  it('should do something', function () {
    expect(!!authInterceptor).toBe(true);
  });

});
