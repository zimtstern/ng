(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var signupCtrl = this;

  signupCtrl.user = {
    firstName: "",
    lastName: "",
    email: "",
    favorite: "",
    phone: ""
  };

  signupCtrl.checkFavorite = function() {
    SignupService.getCategoryByShortName(signupCtrl.user.favorite)
    .then(function (response) {
      signupCtrl.error = false;
      signupCtrl.successMsg = "Your information has been saved";
      SignupService.saveUserInformation(signupCtrl.user, response.data);
    })
    .catch(function (error) {
      signupCtrl.error = true;
    });

  };
}

})();
