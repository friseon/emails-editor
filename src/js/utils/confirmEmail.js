;(function(){
    'use strict';

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