(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('resetPasswordController', ['$scope','userService', function ($scope, userService) {
            $scope.hasPasswordReset = null;
            $scope.resetPassword = function (email) {
                var scope = $scope;
                userService.resetPassword(email,
                    function (data) {
                        //success callback
                        if (data.hasPasswordReset) {
                            scope.hasPasswordReset = true;
                        } else {
                            scope.hasPasswordReset = false;
                        }
                    },
                    function (data) {
                        //error callback
                    }
                    );
            };

        }]);
}());
