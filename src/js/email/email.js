;(function(){
    'use strict';

    require('./email.scss');

    angular
        .module('app')
        .directive('email', function() {
            return {
                restrict: 'E',
                controller: controller,
                controllerAs: 'model',
                scope: {
                    data: '=',
                    onRemove: '&',
                },
                templateUrl: templateUrl
            }
        });

    controller.$inject = [
        '$scope',
    ];

    var templateUrl = require('./email.tpl.html');

    function controller($scope) {
        var model = this;

        model.name = $scope.data.name;
        model.valid = $scope.data.valid;
        model.onRemove = $scope.onRemove;
    }
})();