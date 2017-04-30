console.log(app == angular.module('myapp'));

angular.module('myapp').controller('login', ['$scope', function($scope) {
    $scope.name = 'kaikai';
}]);
