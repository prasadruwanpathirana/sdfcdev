(function () {
    'use strict';

    angular.module('MyApp', [
        'ui.router',
        'MyApp.services',
        'MyApp.controllers',
        'MyApp.directives'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/default');

            $stateProvider
                .state('default', {
                    url: '/default',
                    views: {
                        '': { 
                            templateUrl: SitePrefix + 'views/firstView.html',
                            controller: 'firstController'
                        }
                    }
                })
        })

       
    angular.module('MyApp.services', []);
    angular.module('MyApp.controllers', []);
    angular.module('MyApp.directives', []);
}());

