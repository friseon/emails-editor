;(function(){
    'use strict';

    require('./emailsEditor.scss');

    angular
        .module('app')
        .directive('emailsEditor', function() {
            return {
                restrict: 'E',
                controller: controller,
                controllerAs: 'model',
                scope: {},
                templateUrl: templateUrl
            }
        });

    controller.$inject = [
        '$scope',
    ];

    var templateUrl = require('./emailsEditor.tpl.html');

    function controller($scope) {
        var model = this;
    }
})();