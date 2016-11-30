(function() {
    'use strict';
    angular.module('store')
        .controller('storeDataController', storeDataController)

    storeDataController.$inject = [ 'ProductService' ];


    function storeDataController(ProductService) {
        console.log('Im making a store data controller');
        this.sortOrder = 'price';
        this.newItem = {};


        this.inventory = ProductService.getAll();

        this.tax = 1.0575;
        // console.log(this.inventory[4].price * this.tax);
        this.addProduct = function addProduct(product){
          ProductService.addNew(product);
        };

        /**
         * Sort our data by whatever property you give it
         * @param  {String} sortOrder The property to sort by
         * @return {void}
         */
        this.sortCatagory = function sortCatagory(sortOrder) {
            if (this.sortOrder === sortOrder) {
              this.sortOrder = "-" + sortOrder;
            } else {
              this.sortOrder = sortOrder;
            }
            // "name" / "-name"
        };

    }

}());
