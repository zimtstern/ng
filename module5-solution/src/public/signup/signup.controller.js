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
    phone: ""
  };

  signupCtrl.checkFavorite = function() {
    console.log("Checking category: " + signupCtrl.user.favorite);
    var test = SignupService.getCategoryByShortName(signupCtrl.user.favorite);
    test.then(function (response) {
      signupCtrl.error = false;
      signupCtrl.successMsg = "Your information has been saved";
    })
    .catch(function (error) {
      signupCtrl.error = true;
    });
    // console.log("True or false: " + test);
  };
}

})();
