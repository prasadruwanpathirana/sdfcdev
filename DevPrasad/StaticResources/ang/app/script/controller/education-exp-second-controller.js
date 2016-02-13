(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('educationExpSecController', ['$scope', '$rootScope', '$location', 'userService', function ($scope, $rootScope, $location, userService) {
            $scope.hasEduExpSaved = null;
            $scope.schoolName = $rootScope.eduExp.schoolName;
            $scope.schImgPath = $rootScope.eduExp.schImgPath;
            $scope.fieldOfStudy = $rootScope.eduExp.fieldOfStudy;
            $scope.graduationYear = $rootScope.eduExp.graduationYear;
          
            $scope.saveEduExperience = function (schoolName, fieldOfStudy, graduationYear) {
                var rootScope = $rootScope;
                var location = $location;
                var scope = $scope;
             
                userService.saveEduExperience(
                       {
                           schoolName: schoolName,
                           fieldOfStudy: fieldOfStudy,
                           yearPassed: graduationYear
                       }
                       ,
                       function (data) {
                           if (data.status) {
                               scope.hasEduExpSaved = true;
                           } else {
                               scope.hasEduExpSaved = false;
                           }
                       },
                       function (data) {
                           //error callback
                       }
                       );

            };
        }]);
}());

