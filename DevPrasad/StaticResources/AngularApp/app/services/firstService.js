(function(){

	'use strict'

	angular.module('MyApp.services')
		.factory('myFirstService' , ['$rootScope' , '$q' , '$http' , '$timeout' , function ($rootScope , $q ,$http , $timeout){
		
			var myAPI = {};

              myAPI.authenticateUser = function (param, successCallBack, errCallBack) {
                  var responseMoc = null;
                  var promise = $q.defer().promise;

				   Visualforce.remoting.Manager.invokeAction('AngularRemoteController.login', param,
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

			  return myAPI;
		
		}]);

}());