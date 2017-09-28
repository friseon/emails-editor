;(function(){
    'use strict';
    /**
     * Прототип для создания e-mail
     */
    angular
        .module('app')
        .factory('email.class',
            [
                'isValidEmail',
                function(isValidEmail) {

                    function Email(id, name) {
                        this.id = id;
                        this.name = name;
                        this.valid = isValidEmail(name);

                        return {
                            _id: this.id,
                            name: this.name,
                            valid: this.valid,
                        }
                    };

                    return Email;
                }
            ]
        );
})();