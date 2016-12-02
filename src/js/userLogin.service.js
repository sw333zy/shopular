(function() {
    'use strict';

    angular.module('store')
        .factory('UserLoginService', UserLoginService);

    function UserLoginService() {
        return {
            login: login,
        };

        function login(user) {
            var loginUser = {
                user: user,
                time: new Date()
            };
            return loginUser;
        }
    }
}());
