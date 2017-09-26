;(function(){
    'use strict';

    require('./email.scss');

    angular
        .module('app')
        .directive('email', function() {
            return {
                restrict: 'E',
                controller: 'EmailController',
                controllerAs: 'model',
                scope: {
                    data: '=',
                    onRemove: '&',
                },
                templateUrl: templateUrl
            }
        });

    var templateUrl = require('./email.tpl.html');
})();