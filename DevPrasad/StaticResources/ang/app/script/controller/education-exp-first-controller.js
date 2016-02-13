(function () {
    'use strict';
    angular.module('NVoiApp.controllers').
        controller('educationExpFirstController', ['$scope', '$rootScope', '$location', 'userService', function ($scope, $rootScope, $location, userService) {
            $scope.getSchoolInfor = function (schoolName, fieldOfStudy, graduationYear) {
                var rootScope = $rootScope;
                var location = $location;
                var _schoolName = schoolName;
                var _fieldOfStudy = fieldOfStudy;
                var _graduationYear = graduationYear;
                userService.getSchoolInfor(schoolName,
                    function (data) {
                        location.path('/educationexpsec');
                        rootScope.eduExp = {};
                        rootScope.eduExp.schImgPath = data.schoolImgPath;
                        rootScope.eduExp.schoolName = _schoolName;
                        rootScope.eduExp.fieldOfStudy = _fieldOfStudy;
                        rootScope.eduExp.graduationYear = _graduationYear;
                        rootScope.isPublicPage = true;
                    },
                    function (data) {
                        //error callback
                    }
                    );

            };
        }]);
}());

