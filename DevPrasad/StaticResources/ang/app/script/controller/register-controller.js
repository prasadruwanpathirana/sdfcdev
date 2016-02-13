(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('registerController', ['$rootScope', '$scope', '$location', 'userService', function ($rootScope, $scope, $location, userService) {
            $scope.isUserRegistered = null;
            $scope.registerUser = function (email, fName, lName) {
                var rootScope = $rootScope;
                var scope = $scope;
                var location = $location;

                userService.registerUser(
                    {
                        userEmail: email,
                        firstName: fName,
                        lastName: lName,
						flowId: 'CW'
                    },
                    function (data) {
                        //success callback
                        if (data.status) {
                            scope.isUserRegistered = true;
                            location.path('/tellaboutyou');
                            rootScope.isPublicPage = true;

                        } else {
                            scope.isUserRegistered = false;
                        }
                    },
                    function (data) {
                        //error callback
                    }
                    );

            };
        }]);
}());

