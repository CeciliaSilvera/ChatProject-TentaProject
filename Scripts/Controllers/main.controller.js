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
            $scope.messages = [];
            

            channelsApi.getChannels()
                .then(function (data) {
                    if (data != null)
                        $scope.channels = data;
                });

            messagesApi.getMessages()
               .then(function (data) {
                   if (data != null)
                       $scope.messages = data;
               });
           
           
            $scope.go = function (url, object) {
                $location.path(url);
                console.log(object);
                return object;
            };

        }
    ]);