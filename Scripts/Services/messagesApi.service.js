
angular.module("baseModule")
    .service("messagesApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var messages = api + "/messages";

            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addMessages = function (newMessage) {
                var deferred = $q.defer();

                $http.post(messages, newMessage)
                    .then(function (response) {
                        console.log(response);
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteMessage = function (id) {
                var deferred = $q.defer();

                $http.delete(messages + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };
        }
    ]);