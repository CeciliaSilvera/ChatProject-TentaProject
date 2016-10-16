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

            $scope.requestPassword = function () {
                console.log("in function");
                BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_DANGER,
                    title: "Login",
                    message: $('<div style="height:200px;"></div>').load('/Views/Admin/RequestPassword.html'),
                    cssClass: 'password-modal',
                    buttons: [{
                        label: 'OK',
                        cssClass: 'btn-success',
                        action: function () {
                            alert("doing stuff");
                        }
                    }, {
                        label: 'Avbryt',
                        cssClass: 'btn-default',
                        action: function (dialogItself) {
                            dialogItself.close();
                        }
                    }]
                });
            }

        }
    ]);