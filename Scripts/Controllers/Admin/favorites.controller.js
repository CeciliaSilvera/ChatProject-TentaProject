angular.module("baseModule")
    .controller("FavoritesController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {

            setTimeout(function () {
                $scope.favorites = $scope.favorites.filter(function (favorites) {
                    return favorites;
                });

            }, 100);

        }
    ]);