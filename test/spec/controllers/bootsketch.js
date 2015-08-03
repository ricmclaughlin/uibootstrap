'use strict';

describe('Controller: BootsketchCtrl', function () {

  // load the controller's module
  beforeEach(module('uibootstrapApp'));

  var BootsketchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BootsketchCtrl = $controller('BootsketchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BootsketchCtrl.awesomeThings.length).toBe(3);
  });
});
