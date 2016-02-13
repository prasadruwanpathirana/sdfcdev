(function () {
    'use strict';
    angular.module('NVoiApp.services')
          .factory('userService', ['$q', '$http', '$timeout', '$rootScope', function ($q, $http, $timeout, $rootScope) {
              var nVoiAPI = {};

              nVoiAPI.checkUserExist = function (param, successCallBack, errCallBack) {
				  
                  var promise = $q.defer().promise;

				  Visualforce.remoting.Manager.invokeAction('AngularRemoteController.verifyEmail', param,
					function(result, event){
					 if (event.status) {
						console.log('#### Result ####');
						console.log(result);
						$rootScope.$apply(function() {
							promise.then(successCallBack(result));
						});
					 } else if (event.type === 'exception') {
					  errCallBack(event);
					 } else {
					  errCallBack(event);
					 }
					},
					{escape: false}
				   );

                  return promise;
              };

              nVoiAPI.authenticateUser = function (param, successCallBack, errCallBack) {
                  var responseMoc = null;
                  var promise = $q.defer().promise;
                  $timeout(function () {
                      responseMoc = {
                          hasUserAuthenticated: true,
                          email: 'amila@gmail.com',
                          fName: 'Amila',
                          lName: 'Suranga'
                      };
                      
                      //responseMoc = {
                      //    hasUserAuthenticated: false,
                      //    email: '',
                      //    fName: '',
                      //    lName: ''
                      //};

                      promise.then(successCallBack(responseMoc));
                  }, 30);

                  return promise;
              };

              nVoiAPI.registerUser = function (param, successCallBack, errCallBack) {
                  var promise = $q.defer().promise;

				  Visualforce.remoting.Manager.invokeAction('AngularRemoteController.registerUser', param,
					function(result, event){
					 if (event.status) {
					   console.log('#### Result ####');
					   console.log(result);
					   $rootScope.$apply(function() {
							promise.then(successCallBack(result));
						});
					 } else if (event.type === 'exception') {
					  errCallBack(event);
					 } else {
					  errCallBack(event);
					 }
					},
					{escape: false}
				   );

                  return promise;
              };

              nVoiAPI.resetPassword = function (email, successCallBack, errCallBack) {
                  var responseMoc = null;
                  var promise = $q.defer().promise;
                  $timeout(function () {
                      responseMoc = {
                          hasPasswordReset: true
                      };

                      //responseMoc = {
                      //    hasPasswordReset: false
                      //};

                      promise.then(successCallBack(responseMoc));
                  }, 30);

                  return promise;
              };
              
              nVoiAPI.getSchoolInfor = function (school, successCallBack, errCallBack) {
                  var responseMoc = null;
                  var promise = $q.defer().promise;
                  $timeout(function () {
                      //responseMoc = {
                      //    isSchoolExists: true,
                      //    schoolImgPath: 'img/logo_usyd.png'
                      //};

                      responseMoc = {
                          isSchoolExists: false,
                          schoolImgPath: 'img/no-image.jpg'
                      };

                      promise.then(successCallBack(responseMoc));
                  }, 30);

                  return promise;
              };

              nVoiAPI.saveEduExperience = function (param, successCallBack, errCallBack) {
				  
                  var promise = $q.defer().promise;

				  Visualforce.remoting.Manager.invokeAction('AngularRemoteController.saveEducationInfo', param,
					function(result, event){
					 if (event.status) {
					   console.log('#### Result ####');
					   console.log(result);
					   $rootScope.$apply(function() {
							promise.then(successCallBack(result));
						});
					 } else if (event.type === 'exception') {
					  errCallBack(event);
					 } else {
					  errCallBack(event);
					 }
					},
					{escape: false}
				   );

                  return promise;
              };

              
              nVoiAPI.saveTellAboutYou = function (param, successCallBack, errCallBack) {
                 var promise = $q.defer().promise;

				  Visualforce.remoting.Manager.invokeAction('AngularRemoteController.saveProfileInfo', param,
					function(result, event){
					 if (event.status) {
					   console.log('#### Result ####');
					   console.log(result);
					   $rootScope.$apply(function() {
							promise.then(successCallBack(result));
						});
					 } else if (event.type === 'exception') {
					  errCallBack(event);
					 } else {
					  errCallBack(event);
					 }
					},
					{escape: false}
				   );

                  return promise;
              };


              return nVoiAPI;
          }]);
}());
