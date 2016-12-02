(function(){
    'use strict';

    var expect = chai.expect;

    describe('storeDataController', function() {
        var storeDataController;
        var mockProductService = {};

        beforeEach(module('store'));

        beforeEach(module(function($provide) {
            $provide.value('ProductService', mockProductService);
        }));

        beforeEach(inject(function($controller) {
            mockProductService.getAll = function() {
                return [
                    { name: 'Car', price: 2600, paid: false, quantity: 4, color: 'red', discount: 500}
                ];
            };
            mockProductService.addNew = function(argOne) {
                mockProductService.addNew.numTimesCalled++;
                mockProductService.addNew.lastArgument = argOne;
            };
            mockProductService.addNew.numTimesCalled = 0;

            storeDataController = $controller('storeDataController');
        }));
        it('should have correct scope variables', function() {
              expect(storeDataController.newItem).to.be.an('object');
              expect(Object.keys(storeDataController.newItem).length).to.equal(0);
              expect(storeDataController.inventory).to.be.an('array');
              expect(storeDataController.inventory.length).to.equal(1);
          });

          it('should use the service to add a new product', function() {
              var addNewItem = {}
              storeDataController.newItem.dog = 'k9';

              storeDataController.addProduct(addNewItem);
              expect(storeDataController.newItem.dog).to.equal('k9');
            });

      });

  })();
