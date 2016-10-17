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
            .when("/Favorites", {
                templateUrl: "Views/Admin/Favorites.html",
                controller: "FavoritesController",
                caseInsensitiveMatch: true,
                activeTab: "Favorites"
            })
            .when("/Channel/:id", {
                templateUrl: "Views/Partials/Channel.html",
                controller: "ChannelController",
                caseInsensitiveMatch: true,
                activeTab: "Channel"

            });
            
        }
    ]);