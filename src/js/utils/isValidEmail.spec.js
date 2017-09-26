describe('Проверка валидности e-mail', function() {
    var factory;

    beforeEach(module('app'));

    beforeEach(inject(function(_$rootScope_, _isValidEmail_){
        factory = _isValidEmail_;
    }));

    it('invalid – невалидный e-mail', function() {
        expect(factory('invalid')).toEqual(false);
    });

    it('invalid@ – невалидный e-mail', function() {
        expect(factory('invalid@')).toEqual(false);
    });

    it('invalid@mail – невалидный e-mail', function() {
        expect(factory('invalid@mail')).toEqual(false);
    });

    it('invalid@mail. – невалидный e-mail', function() {
        expect(factory('invalid@mail.')).toEqual(false);
    });

    it('valid@mail.ru – валидный e-mail', function() {
        expect(factory('valid@mail.ru')).toEqual(true);
    });
});