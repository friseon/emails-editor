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
        '$window',
        'getNewId',
        'email.class'
    ];

    var templateUrl = require('./emailsEditor.tpl.html');

    function controller($scope, $window, getNewId, Email) {
        var model = this;
        var currentId = 0;

        model.emails = [];

        model.onListClick = function() {
            var inputField = $window.document.getElementById('input-field');
            if (inputField !== undefined) {
                inputField.focus();
            }
        };

        $scope.$watch('model.emails', function(newV, oldV){
            if (newV !== oldV) {
                currentId = getNewId(model.emails);
            }
        }, true)

        model.addEmail = function() {
            if (model.inputField && model.inputField.length > 0) {
                model.emails.push(new Email(currentId, model.inputField));
                model.inputField = '';
            }
            console.log(model.emails);
        };

        model.removeEmail = function(id) {
            model.emails = model.emails.filter(function(item) { return item._id !== id });
            console.log(model.emails);
        }
    }
})();