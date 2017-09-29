;(function(){
    'use strict';

    require('./emailsEditor.scss');
    /**
     * Контроллер компонента emails-editor
     */
    angular
        .module('app')
        .controller('EmailsEditorController', [
            '$scope',
            '$window',
            'email.class',
            'getNewId',
            'getRandomEmail',
            '$timeout',
            function ($scope, $window, Email, getNewId, getRandomEmail, $timeout) {

                var vm = this;
                var currentId = 0;

                /**
                 * Объект, где хранятся "ручки" для внешнего вызова внутренних методов
                 */
                vm.api = $scope.api || {};

                vm.emails = [];
                vm.inputField = '';

                var inputField = $window.document.getElementById('input-field');

                /**
                 * Установка фокуса в поле ввода при клике по блоку с e-mail
                 */
                vm.onListClick = function() {
                    if (inputField !== undefined) {
                        inputField.focus();
                    }
                };

                $scope.$watch('model.emails', function(newV, oldV){
                    if (newV !== oldV) {
                        currentId = getNewId(vm.emails);
                    }
                }, true)

                /**
                 * Добавление e-mail
                 */
                vm.addEmail = function() {
                    $timeout(function() {
                        if (vm.inputField && vm.inputField.length > 0) {
                            vm.emails.push(new Email(currentId, vm.inputField));
                            vm.inputField = '';
                        }
                    }, 0);
                }
                
                /**
                 * Удаление e-mail
                 */
                vm.removeEmail = function(id) {
                    vm.emails = vm.emails.filter(function(item) { return item._id !== id });
                }

                /**
                 * Случайно сгенерированный e-mail
                 * - для внешнего вызова
                 */
                vm.api.addRandomMail = function() {
                    vm.emails.push(new Email(currentId, getRandomEmail()));
                    if (inputField !== undefined && inputField !== null) {
                        inputField.focus();
                    }
                }

                /**
                 * Вывод количества e-mail
                 * - для внешнего вызова
                 */
                vm.api.getEmailsCount = function() {
                    alert('Кол-во e-mail: ' + vm.emails.length);
                }
            }
        ])
})();