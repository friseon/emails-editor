;(function(){
    'use strict';
    /**
     * Внешний контроллер приложения
     */
    angular
        .module('app')
        .controller('AppController', [
            function () {
                var vm = this;
                vm.emailsEditorApi = {};
            }
        ])
})();