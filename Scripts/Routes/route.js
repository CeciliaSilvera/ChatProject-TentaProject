/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
            .when("/", {
                templateUrl: "Views/Home.html",
                controller: "HomeController",
                caseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Admin", {
                templateUrl: "Views/Admin/EditChannel.html",
                controller: "AdminController",
                caseInsensitiveMatch: true,
                activeTab: "Admin"
            });
            
        }
    ]);