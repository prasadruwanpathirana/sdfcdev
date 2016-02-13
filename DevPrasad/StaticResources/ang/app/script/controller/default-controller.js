(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('defaultController', ['$rootScope', '$scope', '$location', 'userService', function ($rootScope, $scope, $location, userService) {
            $rootScope.isPublicPage = false;
            $rootScope.user = {};
            $scope.validateEmail = function (email) {
                var location = $location;
                var rootScope = $rootScope;
                userService.checkUserExist({ userEmail:email },
                    function (data) {
                        //success callback
                        if (data.status) {
                            location.path('/login');
                        } else {
                            location.path('/register');
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
