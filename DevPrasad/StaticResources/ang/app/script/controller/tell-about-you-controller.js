(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('tellAboutYouController', ['$rootScope', '$scope', '$location', 'userService', function ($rootScope, $scope, $location, userService) {
            $scope.hasTellAboutYouSaved = null;
            $scope.saveTellAboutYou = function (whereLive, howFarTravel, specialisedIn, expectedRate) {
                var scope = $scope;
                var rootScope = $rootScope;
                var location = $location;
             
                userService.saveTellAboutYou({
                    userImg:scope.myFile,
                    mailingCity: whereLive,
                    travelOptions: howFarTravel,
                    specialise: specialisedIn,
                    expectedRate: expectedRate
                    },
                    function (data) {
                        //success callback
                        if (data.status) {
                            scope.hasTellAboutYouSaved = true;
                            location.path('/whatsnext');
                            rootScope.isPublicPage = true;
                        } else {
                            scope.hasTellAboutYouSaved = false;
                        }
                    },
                    function (data) {
                        //error callback
                    }
                    );
            };

        }]);
}());
