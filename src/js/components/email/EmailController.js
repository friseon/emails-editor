;(function(){
    'use strict';

    require('./email.scss');

    angular
        .module('app')
        .controller('EmailController', ['$scope', function($scope) {
            var vm = this;

            vm.name = $scope.data.name;
            vm.valid = $scope.data.valid;
            vm.onRemove = $scope.onRemove;
        }])
})();