angular.module("baseModule")
    .controller("FavoritesController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {

            setTimeout(function () {
                $scope.favorites = $scope.channels.filter(function (channel) {
                    return $scope.favorites.indexOf(channel.id) != -1;
                });

            }, 100);

            

        }
    ]);