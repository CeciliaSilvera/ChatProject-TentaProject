/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("HomeController", [
        "$scope",
        "$routeParams",
        "channelsApi",
        function ($scope, $routeParams, channelsApi) {
            $scope.title = "Welcome to my tenta project";
            $scope.subTitle = "This project is written using Angular.js and Bootstrap. All login features are fake but please feel free to try them out as they add some extra features."
            $scope.signature = "Best Regards, Cecilia Silvera"

        }
    ]);