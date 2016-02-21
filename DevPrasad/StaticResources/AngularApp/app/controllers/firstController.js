(function(){

	'use strict';

	angular.module('MyApp.controllers').
		controller('firstController', ['$scope' , '$rootScope' , 'myFirstService' , function ($scope , $rootScope , myFirstService )	 {
		
			console.log(test);
			myFirstService.authenticateUser({ name : 'prasad' } , 
			
				//success calla back
				function(data) {
					console.log(data);
				},
				
				//error call back
				function(data) {
				
					console.log(data);

				});
		
		}]);

}());