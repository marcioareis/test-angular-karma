describe('convertDirective', function(){

    var $compile,
    $rootScope;

    beforeEach(module('cruj'));
    beforeEach(module('js/convert/ConvertTemplateDirective.html'));
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Render variable and variableTwo', function(){
        $rootScope.passarValor = "Valor Um";
        var elemento = $compile('<convert-directive variable="{{passarValor}}" variableTwo="Texto sem var"></convert-directive')($rootScope);
        $rootScope.$digest();
        //console.log(elemento.find('h1').text());
        expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);
        //expect(elemento.find('h2').text()).toEqual("Texto sem var");
    });

    it('Render variable is change', function(){
        $rootScope.passarValor = "Valor Um";
        var elemento = $compile('<convert-directive variable="{{passarValor}}" variableTwo="Texto sem var"></convert-directive')($rootScope);
        $rootScope.$digest();
        console.log('Valor inicial ', elemento.find('h1').text());
        expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);
        
        $rootScope.passarValor = "Alterou Valor";
        $rootScope.$digest();
        expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);
    });
});