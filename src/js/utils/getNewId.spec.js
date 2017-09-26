describe('Получение нового id', function() {
    var factory;

    var _1mockArr = [
        {
            _id: 0,
        },
    ];

    var _2mockArr = [
        {
            _id: 1,
        },
        {
            _id: 3,
        },
    ]

    beforeEach(module('app'));

    beforeEach(inject(function(_$rootScope_, _getNewId_){
        factory = _getNewId_;
    }));

    it('Возращает 0 если массив пустой', function() {
        expect(factory([])).toEqual(0);
    });

    it('Возращает 1 если в массиве один объект с _id = 0 ', function() {
        expect(factory(_1mockArr)).toEqual(1);
    });

    it('Возращает 4 если в массиве объект с максимальный _id = 3 ', function() {
        expect(factory(_2mockArr)).toEqual(4);
    });
});