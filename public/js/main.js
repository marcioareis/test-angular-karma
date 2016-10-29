angular.module('cruj', ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'js/convert/TemplateConvert.html',
        controller: 'ConvertController'
    })
}]);