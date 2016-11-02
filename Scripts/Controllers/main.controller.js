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
        "$rootScope",
        "$timeout",
        "Hub",
        function ($scope, $routeParams, $route, $location, messagesApi,
             channelsApi, $rootScope, $timeout, Hub) {

            $scope.$route = $route;
            $scope.channels = [];
            $scope.messages = [];
            $scope.favorites = [];
            $scope.newChannel = {};
            $scope.admin = true;
            $scope.starEmpty = true;
            $scope.starFull = false;
            
                new Hub('chatHub', {
                    listeners: {
                        'recieveMessage': function (message) {
                            console.log(message);
                            $rootScope.$apply();
                        }
                    },
                    rootPath: 'http://dummyapi.kodalagom.se/signalr',
                    stateChanged: function (state) {
                        switch (state.newState) {
                            case $.signalR.connectionState.connecting:
                                //your code here
                                break;
                            case $.signalR.connectionState.connected:
                                alert("connected");
                                break;
                            case $.signalR.connectionState.reconnecting:
                                //your code here
                                break;
                            case $.signalR.connectionState.disconnected:
                                //your code here
                                break;
                        }
                    }
                });
            
            
            
            
            
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
                return object;
            };



            $scope.saveFavorites = function () {
                var myFavs = $scope.favorites.map(function (fav) {
                    return fav.id;
                });

                var jsonString = JSON.stringify(myFavs);
                localStorage.setItem("favorites", jsonString);
            }

            $scope.loadFavorites = function () {
                var data = localStorage.getItem("favorites");
                if (data) {
                    $scope.favorites = JSON.parse(data);
                }
            }
            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.channels.push(data);
                    });
            }
            $scope.makeFavorite = function (channelId, elementE, elementF) {
                if ($.inArray(channelId, $scope.favorites) == -1) {
                    $scope.favorites.push(channelId);
                    $scope.saveFavorites();
                    elementE.starEmpty = false;
                    elementF.starFull = true;
                }
            }
            $scope.deleteChannel = function (channel) {
                console.log("in function");
                channelsApi.deleteChannel(channel.id)
                    .then(function () {
                        var index = $scope.channels.map(function (channel) {
                            return channel.id;
                        }).indexOf(channel.id);

                        $scope.channels.splice(index, 1);
                    });
            }

            //getHub("http://dummyapi.kodalagom.se/signalr", "chatHub");
        }
    ]);