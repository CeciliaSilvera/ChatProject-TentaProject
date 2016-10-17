/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("AdminController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Edit Channels";
            $scope.newChannel = {};


            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.channels.push(data);

                    });
            }
            
            
            $scope.makeFavorite = function (channel) {
                $scope.favorites.push(channel);
                $scope.saveFavorites();
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

        }
    ]);