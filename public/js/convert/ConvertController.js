angular.module('cruj').controller('ConvertController', ['$scope', 'ConvertService', function ($scope, ConvertService) {

    $scope.convertFtoC = function (a) {
        $scope.retorno = ConvertService.convertFToC(a);
        $scope.convert = $scope.retorno + '°C';
    }

    $scope.convertCtoF = function (a) {
        $scope.retorno = ConvertService.convertCToF(a);
        $scope.convert = $scope.retorno + '°F';
    }

}])