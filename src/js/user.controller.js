(function() {
    'use strict';

    angular.module('store')
        .controller('UserController', UserController);

    UserController.$inject = ['UserLoginService'];

    function UserController(signIn) {
        this.user = {};
        this.loggedin = false;
        this.login = function login(user){
            return signIn.login(user);
        };
    }
}());
