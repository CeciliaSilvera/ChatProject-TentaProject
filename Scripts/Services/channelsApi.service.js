
angular.module("baseModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            
            var channels = api + "/channels";

            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.post(channels, newChannel)
                    .then(function (response) {
                        console.log(response);
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteChannel = function (id) {
                var deferred = $q.defer();

                $http.delete(channels + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };
        }
    ]);