;(function(){
    'use strict';
    /**
     * Получение _id для нового элемента
     */
    angular
        .module('app')
        .factory('getNewId', function() {
            return getNewId;
        });

    function getNewId(arr) {
        if (arr !== undefined && arr.length > 0) {
            return Math.max.apply(null, arr.map(function(item) { return item._id || 0 })) + 1;
        }
        return 0;
    }
})();