(function(){

	'use strict';

	angular.module('MyApp.controllers').
		controller('firstController', ['$scope' , '$rootScope' , 'myFirstService' , function ($scope , $rootScope , myFirstService)	 {
		
			console.log(12);
		
		}]);

}());