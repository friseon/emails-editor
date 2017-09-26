describe('EmailsEditorController. Контроллер управления компонентом', function() {
    beforeEach(module('app'));
    
    var $controller,
        $rootScope,
        $scope,
        controller,
        $timeout;
    
    var testValidEmail = {
        _id: 0,
        name: 'valid@mail.ru',
        valid: true,
    };

    beforeEach(inject(function(_$controller_, _$rootScope_, _$timeout_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
    }));

    beforeEach(function(){
        $scope = $rootScope.$new();
        controller = $controller('EmailsEditorController', { $scope: $scope });
        $scope.$digest();
    })

    it('Наличие изначально пустого массива с emails', function() {
        expect(controller).toBeDefined();
        expect(controller.emails).toBeDefined();
        expect(controller.emails).toEqual([]);
    });

    it('При пустом поле e-mail не добавляется', function() {
        expect(controller.emails.length).toEqual(0);
        expect(controller.inputField).toEqual('');
        controller.addEmail();
        $timeout.flush();
        $timeout.verifyNoPendingTasks();
        expect(controller.emails.length).toEqual(0);
    });

    it('Добавление e-mail', function() {
        expect(controller.emails.length).toEqual(0);
        controller.inputField = testValidEmail.name;
        expect(controller.inputField).toEqual(testValidEmail.name);
        controller.addEmail();
        $timeout.flush();
        $timeout.verifyNoPendingTasks();
        expect(controller.emails.length).toEqual(1);
        expect(controller.emails[0]).toEqual(testValidEmail);
    });
    
    it('Генерация случайного e-mail', function() {
        expect(controller.emails.length).toEqual(0);
        controller.addRandomMail();
        expect(controller.emails.length).toEqual(1);
    });

    it('Удаление e-mail', function() {
        controller.inputField = testValidEmail.name;
        controller.addEmail();
        $timeout.flush();
        $timeout.verifyNoPendingTasks();
        expect(controller.emails.length).toEqual(1);
        controller.removeEmail(testValidEmail._id);
        expect(controller.emails.length).toEqual(0);
    });
})