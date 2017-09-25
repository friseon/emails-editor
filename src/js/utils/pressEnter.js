;(function(){
    'use strict';

    angular
        .module('app')
        .directive('pressEnter', function() {
            return function(scope, element, attrs) {
                element.bind("keypress", function(event) {
                    if (event.which === 13) {
                        scope.$apply(function() {
                            scope.$eval(attrs.pressEnter);
                        })

                        event.preventDefault();
                    }
                })
            }
        });
})();