/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Welcome to my tenta project";
            $scope.subTitle = "This project is written using Angular.js, Bootstrap and JqueryUI. I also added an extra library called Bootstrap Dialogs and some plain vanilla javascript and custom CSS. The project uses an Api located on a remote server. All login features are fake but please fell free to try them out"
            $scope.signature = "Best Regards, Cecilia Silvera"
        }
    ]);