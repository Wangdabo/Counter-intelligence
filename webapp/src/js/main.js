/* Metronic App */
var myApp = angular.module("myApp", [
    "ui.router",
    'oc.lazyLoad',
    'ngAnimate',
    'ngTouch'
]);


//返回上一层
myApp.run(['$rootScope', function ($rootScope) {
    $rootScope.goBack = function () {
        history.back();
    };
}]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
myApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/* 底部控制器 */
myApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);


/* 页面路由 */
myApp.config(['$stateProvider','$httpProvider', '$urlRouterProvider', function($stateProvider,$httpProvider, $urlRouterProvider) {
    // 无法找到的时候，默认跳转首页
    $urlRouterProvider.otherwise("/dashboard.html");
    $stateProvider
        // Dashboard
        .state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "views/dashboard.html",
            data: {pageTitle: '控制台'},
            controller: "dash_controller"
        })
        .state('actcard',{
            url:"/actcard.html",
            templateUrl:"views/actcard/actcard.html",
            data:{pageTitle:'开卡流程'},
            controller:"actcard_controller"
        })
       

}]);



