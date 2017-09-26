describe('Формирование случайного e-mail', function() {
    var factory;

    beforeEach(module('app'));

    beforeEach(inject(function(_$rootScope_, _getRandomEmail_){
        factory = _getRandomEmail_;
    }));

    it('Генерирует случайную строку с e-mail длиной 18 символов', function() {
        var result = factory();
        expect(typeof result).toBe('string');
        expect(result.length).toBe(18);
    });

    it('В сгенерированной строке есть @', function() {
        var result = factory();
        expect(result.indexOf('@') > -1).toEqual(true);
    });

    it('В сгенерированной строке есть домен верхнего уровня', function() {
        var result = factory();
        expect(result.search(/\.[a-z,а-я]{2,}$/) > -1).toEqual(true);
    });
});