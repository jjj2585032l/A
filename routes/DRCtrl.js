/**
 * Created by Kaboyi on 2016/12/22.
 */
angular.module('DRCtrl',[
       'ngStorage',
       'ngRoute',
       'angular-loading-bar'])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/',{
               templateUrl:'views/demo.jade',
                controller:'HomeCtrl'
    })
}])