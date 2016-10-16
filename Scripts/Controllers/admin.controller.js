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
            };

            $scope.deleteMessage = function (message) {
                postsApi.deleteMessage(message.id)
                    .then(function () {
                        var index = $scope.messages.map(function(message) {
                            return message.id;
                        }).indexOf(message.id);

                        $scope.messages.splice(index, 1);
                    });
            }

        }
    ]);