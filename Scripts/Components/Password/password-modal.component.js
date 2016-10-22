angular.module("baseModule")
    .component("passwordModal", {
        templateUrl: "Scripts/Components/Password/passwordModal.html",
        controller: function () {
            var ctrl = this;

            ctrl.login = function () {
                ctrl.admin = false;
                $("#admin-login").modal("hide");
            }
            ctrl.formInputs = [{
                type: "text",
                id: "name",
                label: "Name",
                model: "",
                isValid: false
            }, {
                type: "password",
                id: "password",
                label: "Password",
                model: "",
                isValid: false
            }];
        },
        bindings: {
            admin: "="
        }
    });