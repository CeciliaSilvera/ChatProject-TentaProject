angular.module("baseModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "channelsApi",
        "messagesApi",
        function ($scope, $routeParams, channelsApi, messagesApi) {
            $scope.newMessage = {};

            $scope.$watch("channels", function (channels) {
                $scope.channel = $scope.channels.filter(function (channel) {
                    return channel.id == $routeParams.id;
                })[0];
            });

            $scope.addMessages = function () {
               
                messagesApi.addMessages($scope.newMessage)
                    .then(function (response) {
                        $scope.messages.push($scope.newMessage);
                        $scope.newMessage = {};
                    });
            }
            
        }
    ]);