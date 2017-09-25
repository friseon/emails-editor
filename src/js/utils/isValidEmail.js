;(function(){
    'use strict';

    angular
        .module('app')
        .factory('isValidEmail', function() {
            return isValidEmail;
        });

    function isValidEmail(email) {
        if (email !== undefined && typeof(email) === 'string') {
            var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regex.test(email);
        }
        return false;
    }
})();