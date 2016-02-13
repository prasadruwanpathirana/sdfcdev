(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('mainController', ['$rootScope','$scope', '$location', function ($rootScope,$scope, $location) {
            $scope.fName = $rootScope.user.fName;
            $scope.resetPassword = function() {
                $location.path('/resetpassword');
                $rootScope.isPublicPage = true;
            };
            $scope.tellAboutYou = function () {
                $location.path('/tellaboutyou');
                $rootScope.isPublicPage = true;
            };
        }]);
}());

