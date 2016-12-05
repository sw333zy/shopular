(function() {
    'use strict';

    var expect = chai.expect;

    describe('ProductService', function() {
        var ProductService;


        beforeEach(module('store'));


        beforeEach(inject(function(_ProductService_) {

            ProductService = _ProductService_;
        }));

        it('should be able to get an array of items', function() {

            var result = ProductService.getAll();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(12);



            expect(result[0].name).to.be.a('string');

        });



    });

    describe('test local storage', function() {

        var ProductService;


        beforeEach(module('store'));


        beforeEach(inject(function(_ProductService_) {

            ProductService = _ProductService_;
        }));


        it("Should save item array to local storage w/ update", function() {
            var defaultInventory = JSON.parse(localStorage.getItem("items"));
            var newItem = {
                id: 1,
                name: 'truck',
                price: 19000,
                quantity: 6,
                color: 'black',
                discount: 1000
            };
            ProductService.addNew(newItem);
            var updatedInventory = JSON.parse(localStorage.getItem('inventory'));
            expect(updatedInventory.length).to.equal(13);
            expect(updatedInventory).to.be.an('array');
            expect(updatedInventory[12].name).to.equal('truck');

        });

    });


}());
