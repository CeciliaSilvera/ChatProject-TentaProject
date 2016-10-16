angular.module("baseModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "channelsApi",
        "messagesApi",
        function ($scope, $routeParams, channelsApi, messagesApi) {
            $scope.newMessage = {};
            $scope.newChannel = {};

            $scope.$watch("channels", function (channels) {
                $scope.channel = $scope.channels.filter(function (channel) {
                    return channel.id == $routeParams.id;
                })[0];
            });

            $scope.addMessage = function (channelId) {
                $scope.newMessage.channelId = channelId;
                messagesApi.addMessages($scope.newMessage)
                    .then(function (response) {
                        $scope.messages.push($scope.newMessage);
                        $scope.newMessage = {};
                    });
            }
            $scope.addChannel = function () {
                $scope.newChannel.messages = [];
                console.log("in function");
                channelsApi.addChannel($scope.newChannel)
                    .then(function (response) {
                        $scope.channels.push($scope.newChannel);
                        $scope.newChannel = {};
                    });
            }
            
        }
    ]);