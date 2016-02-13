(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('loginController', ['$rootScope', '$scope', '$location', 'userService', function ($rootScope,$scope, $location, userService) {
            $scope.isLoginFailed = false;
            $scope.authenticateUser = function (email, password) {
                var location = $location;
                var rootScope = $rootScope;
                var scope = $scope;
                userService.authenticateUser(
                {
                    email:email,
                    password:password
                },
                    function (data) {
                        //success callback
                        if (data.hasUserAuthenticated) {
                            rootScope.user.fName = data.fName;
                            location.path('/main');
                        } else {
                            scope.isLoginFailed = true;
                        }
                        rootScope.isPublicPage = true;
                    },
                    function (data) {
                        //error callback
                    }
                    );
                
            };
        }]);
}());

