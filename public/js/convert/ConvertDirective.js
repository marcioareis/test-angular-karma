angular.module('cruj').directive('convertDirective', [function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'js/convert/ConvertTemplateDirective.html',
        scope:{
            variable: '@'
        },
        link: function($scope, elem, attrs){
            $scope.retornoDirective = attrs.variableTwo;
        }
    }
}])