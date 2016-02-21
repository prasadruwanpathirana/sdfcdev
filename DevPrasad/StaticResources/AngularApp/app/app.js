(function () {
    'use strict';

    angular.module('NVoiApp', [
        'ui.router',
        'foundation',
        'NVoiApp.services',
        'NVoiApp.controllers',
        'NVoiApp.directives',
       'ngTagsInput'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/default');

            $stateProvider
                .state('default', {
                    url: '/default',
                    views: {
                        '': { templateUrl: SitePrefix + 'registrationcw.html' },
                        'columnOne@default': {

                            templateUrl: SitePrefix + 'partials/default.html',
                            controller: 'defaultController'
                        }
                    }
                })
        })

        .run(function ($rootScope, $location) {
            $rootScope.$on("$stateChangeStart", function (event, next, current) {
                if ($rootScope.isPublicPage) {
                    $rootScope.isPublicPage = false;
                } else {
                    // $location.path("/default");
                    // $location.path("/searchassignment");

                }
            });

            $rootScope.globalMixup = function () {
                $('input,select').on('keyup change blur keypress', function () {
                    var empty = $(this).parent().find('input').filter(function () {
                        return this.value === "";
                    });
                    var emptySel = $(this).parent().find('select').filter(function () {
                        return this.value === "";
                    });
                    if (empty.length || emptySel.length) {
                        $('button').prop("disabled", true);
                    } else {
                        $('button').prop("disabled", false);
                    }
                }).change();
            };
        });
    angular.module('NVoiApp.services', []);
    angular.module('NVoiApp.controllers', []);
    angular.module('NVoiApp.directives', []);
}());

