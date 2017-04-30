app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url:'/login',
        templateUrl: 'tpl/html/login/login.html',
        controller: 'login',
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('tpl/js/login/login.js');
            }]
        }
    })
}]);