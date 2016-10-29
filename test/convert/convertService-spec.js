describe('ConvertService', function(){

    beforeEach(module('cruj'));
    beforeEach(inject(function($injector){
        service = $injector.get('ConvertService');
    }));

    it('convertCToF', function(){
        var a = 25;        

        expect(service.convertCToF(a)).toEqual(77);
    });

    it('convertFToC', function(){
        var a = 77;

        expect(service.convertFToC(a)).toEqual(25);
    })

});