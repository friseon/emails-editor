describe('confrimEmail. Триггер на поле ввода на создание email', function() {
    var $compile,
        $rootScope,
        $window;

    beforeEach(function() {
        module('app');
        inject(function(_$compile_, _$rootScope_, _$window_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $window = _$window_;
        });
    });

    it('Метод должен вызываться, если нажали Enter', function() {
        $rootScope.test = jasmine.createSpy('test');
        var element = $compile('<input confirm-email="test()"></input>')($rootScope);
        $rootScope.$digest();
        var e = new $window.Event('keypress');
        e.key = 'Enter';
        element.triggerHandler(e);
        expect($rootScope.test).toHaveBeenCalled();
    });

    it('Метод должен вызываться, если нажали запятую', function() {
        $rootScope.test = jasmine.createSpy('test');
        var element = $compile('<input confirm-email="test()"></input>')($rootScope);
        $rootScope.$digest();
        var e = new $window.Event('keypress');
        e.key = ',';
        element.triggerHandler(e);
        expect($rootScope.test).toHaveBeenCalled();
    });

    it('Метод не должен вызываться, если нажали Esc', function() {
        $rootScope.test = jasmine.createSpy('test');
        var element = $compile('<input confirm-email="test()"></input>')($rootScope);
        $rootScope.$digest();
        var e = new $window.Event('keypress');
        e.key = 'Esc';
        element.triggerHandler(e);
        expect($rootScope.test).not.toHaveBeenCalled();
    });
});