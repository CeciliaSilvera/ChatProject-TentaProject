angular.module("baseModule")
    .component("validatedInput", {
        templateUrl: "Scripts/Components/ValidatedInput/ValidatedInput.html",
        controller: function () {

            var ctrl = this;

            ctrl.setValid = function (isValid) {
                console.log(isValid);
            }
        },

        bindings: {

            type: "<",
            id: "<",
            label: "<",
            text:"=",
            model:"=",
            isValid: "="

        }
    })