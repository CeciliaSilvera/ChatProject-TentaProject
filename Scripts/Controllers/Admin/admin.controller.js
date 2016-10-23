/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("AdminController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Edit Channels";
            $scope.newChannel = {};
            
            $scope.starEmpty = true;
            $scope.starFull = false;

            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.channels.push(data);
                    });
            }
            
            
            $scope.makeFavorite = function (channelId) {
                if ($.inArray(channelId, $scope.favorites) == -1) {
                    $scope.favorites.push(channelId);
                    $scope.saveFavorites();
                        $scope.starEmpty = false;
                        $scope.starFull = true;
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
            

            

        }
    ]);