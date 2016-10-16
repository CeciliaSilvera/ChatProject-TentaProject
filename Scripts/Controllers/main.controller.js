/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("MainController", [
        "$scope",
        "$routeParams",
        "$route",
        "$location",
        "messagesApi",
        "channelsApi",
        function ($scope, $routeParams, $route, $location, messagesApi,
             channelsApi) {

            $scope.$route = $route;
            $scope.channels = [];

            channelsApi.getChannels()
                .then(function (data) {
                    if (data != null)
                        $scope.channels = data;
                });

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);