(function () {
    'use strict';

    angular.module('NVoiApp', [
        'NVoiApp.services',
        'NVoiApp.controllers',
        'NVoiApp.directives',
        'ngRoute'
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when("/default", { templateUrl: SitePrefix + "partials/default.html", controller: "defaultController" }).
                when("/login", { templateUrl: SitePrefix + "partials/login.html", controller: "loginController" }).
                when("/register", { templateUrl: SitePrefix + "partials/register.html", controller: "registerController" }).
                when("/main", { templateUrl: SitePrefix + "partials/main.html", controller: "mainController" }).
                when("/resetpassword", { templateUrl: SitePrefix + "partials/reset-password.html", controller: "resetPasswordController" }).
                when("/tellaboutyou", { templateUrl: SitePrefix + "partials/tell-about-you.html", controller: "tellAboutYouController" }).
                when("/whatsnext", { templateUrl: SitePrefix + "partials/whats-next.html", controller: "whatsNextController" }).
                when("/educationexpfirst", { templateUrl: SitePrefix + "partials/education-exp-first.html", controller: "educationExpFirstController" }).
                when("/educationexpsec", { templateUrl: SitePrefix + "partials/education-exp-second.html", controller: "educationExpSecController" }).
                otherwise({ redirectTo: '/default' });
        }])
        .run(function ($rootScope, $location) {
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if ($rootScope.isPublicPage) {
                    $rootScope.isPublicPage = false;
                } else {
                    $location.path("/default");
                }
            });
        });

    angular.module('NVoiApp.services', []);
    angular.module('NVoiApp.controllers', []);
    angular.module('NVoiApp.directives', []);

    $('.eq-height').matchHeight({
        byRow: false
    });
    $(window).resize(function () {
        $('.eq-height').matchHeight({
            byRow: false
        });
    });

}());