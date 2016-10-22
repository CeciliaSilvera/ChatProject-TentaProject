angular.module("baseModule")
    .controller("FavoritesController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.favs = [];

            setTimeout(function () {
                $scope.favs = $scope.channels.filter(function (channel) {
                    return $scope.favorites.indexOf(channel.id) != -1;
                });

            }, 100);

        }
    ]);