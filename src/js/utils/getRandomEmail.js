;(function(){
    'use strict';

    angular
        .module('app')
        .factory('getRandomEmail', function() {
            return getRandomEmail;
        });

    function getRandomEmail() {
        var result = '';
        var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        result += '@';
        chars = chars.slice(0, -10);
        for (var i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        result += '.';
        for (var i = 0; i < 2; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      
        return result;
    }
})();