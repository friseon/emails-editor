;(function(){
    'use strict';

    require('./emailsEditor.scss');
    /**
     * Компонент emails-editor
     */
    angular
        .module('app')
        .directive('emailsEditor', function() {
            return {
                restrict: 'E',
                controller: 'EmailsEditorController',
                controllerAs: 'model',
                scope: {},
                templateUrl: templateUrl
            }
        });

    var templateUrl = require('./emailsEditor.tpl.html');
})();