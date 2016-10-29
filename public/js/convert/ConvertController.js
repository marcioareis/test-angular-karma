angular.module('cruj').controller('ConvertController', ['$scope', 'ConvertService', function ($scope, ConvertService) {

    $scope.convertFtoC = function (a) {
        $scope.convert = ConvertService.convertFToC(a);
        $scope.retorno = $scope.convert + '°C';
    }

    $scope.convertCtoF = function (a) {
        $scope.convert = ConvertService.convertCToF(a);
        $scope.retorno = $scope.convert + '°F';
    }

}])