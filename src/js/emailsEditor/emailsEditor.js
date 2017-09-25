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
        'email.class',
        'getNewId',
        'getRandomEmail',
        '$timeout'
    ];

    var templateUrl = require('./emailsEditor.tpl.html');

    function controller($scope, $window, Email, getNewId, getRandomEmail, $timeout) {
        var model = this;
        var currentId = 0;

        model.emails = [];
        var inputField = $window.document.getElementById('input-field');

        /**
         * Установка фокуса в поле ввода при клике по блоку с e-mail
         */
        model.onListClick = function() {
            if (inputField !== undefined) {
                inputField.focus();
            }
        };

        $scope.$watch('model.emails', function(newV, oldV){
            if (newV !== oldV) {
                currentId = getNewId(model.emails);
            }
        }, true)

        /**
         * Добавление e-mail
         */
        model.addEmail = function() {
            $timeout(function() {
                if (model.inputField && model.inputField.length > 0) {
                    model.emails.push(new Email(currentId, model.inputField));
                    model.inputField = '';
                }
            }, 0);
        }
        
        /**
         * Удаление e-mail
         */
        model.removeEmail = function(id) {
            model.emails = model.emails.filter(function(item) { return item._id !== id });
        }

        /**
         * Случайно сгенерированный e-mail
         */
        model.addRandomMail = function() {
            model.emails.push(new Email(currentId, getRandomEmail()));
            if (inputField !== undefined) {
                inputField.focus();
            }
        }

        /**
         * Вывод количества e-mail
         */
        model.getEmailsCount = function() {
            alert('Кол-во e-mail: ' + model.emails.length);
        }
    }
})();