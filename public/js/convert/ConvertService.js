angular.module('cruj').service('ConvertService', [function(){

    function convertCToF(val){
        return (val * 9/5) + 32 ;
    }

    function convertFToC(val){
        return (val - 32) * 5/9;
    }

    
    return{
        convertCToF: convertCToF,
        convertFToC: convertFToC
    };
}])