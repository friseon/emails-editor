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
        '$window'
    ];

    var templateUrl = require('./emailsEditor.tpl.html');

    function controller($scope, $window) {
        var model = this;

        model.emails = [
            {
                _id: 0,
                name: 'sidorov@mail.ru',
            },
        ];

        model.onListClick = function() {
            var inputField = $window.document.getElementById('input-field');
            if (inputField !== undefined) {
                inputField.focus();
            }
        };

        model.addEmail = function() {
            if (model.inputField.length > 0) {
                var newId = model.emails && model.emails.length ? 
                    Math.max.apply(null, model.emails.map(function(item) { return item._id })) + 1 :
                    0;
                model.emails.push({
                    _id: newId,
                    name: model.inputField,
                });
                model.inputField = '';
            }
        };

        model.removeEmail = function(id) {
            model.emails = model.emails.filter(function(item) { return item._id !== id });
        }
    }
})();