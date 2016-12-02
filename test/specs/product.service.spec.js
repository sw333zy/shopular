(function() {
    'use strict';

    var expect = chai.expect;

    describe('ProductService', function() {
        var ProductService;


        beforeEach(module('store'));


        beforeEach(inject(function(_ProductService_) {

            ProductService = _ProductService_;
        }));

        it('should be able to get an array of students', function() {
          
            var result = ProductService.getAll();
            expect(result).to.be.an('array');

        });

    });


}());
