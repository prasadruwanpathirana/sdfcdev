(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('whatsNextController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
            $scope.navLink = function (link) {
                switch (link) {
                    case 'ADD_WORK_EXP':
                        $location.path('/addworkexperience');
                        break;
                    case 'ADD_EDU':
                        $location.path('/educationexpfirst');
                        break;
                    case 'INV_FRIENDS':
                        $location.path('/invitefriends');
                        break;
                }
                $rootScope.isPublicPage = true;
            };

        }]);
}());
