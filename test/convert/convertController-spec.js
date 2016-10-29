describe('convertController',function(){
    var $scope;

    beforeEach(module('cruj'));
    beforeEach(inject(function($injector, $rootScope, $controller){
        $scope = $rootScope.$new();
        $controller('ConvertController', {
            $scope: $scope
        });
    }));

    it('converter Celsius para Fahrenheit', function(){
        $scope.convertCtoF(25);
        expect($scope.retorno).toEqual(77);
    });

    it('converter Fahrenheit para Celsius', function(){
        $scope.convertFtoC(77);
        expect($scope.retorno).toEqual(25);
    })
});