;(function(){
    'use strict';
    /**
     * Триггер для создания e-mail:
     * - при нажатии на Enter;
     * - при установке запятой;
     */
    angular
        .module('app')
        .directive('confirmEmail', function() {
            return function(scope, element, attrs) {
                element.bind("keypress", function(event) {
                    if (event.key === 'Enter' || event.key === ',') {
                        scope.$apply(function() {
                            scope.$eval(attrs.confirmEmail);
                        })

                        event.preventDefault();
                    }
                })
            }
        });
})();