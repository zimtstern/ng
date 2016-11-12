(function() {
'use strict';

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var signupService = this;

  // this holds the data
  var userInformation = {};

  signupService.getCategoryByShortName = function(cat_shortname) {
    console.log(ApiPath + '/menu_items/' + cat_shortname + '.json');
    return $http.get(ApiPath + '/menu_items/' + cat_shortname + '.json');
  };

  signupService.saveUserInformation = function(info, responseData) {
    console.log("the response data" + responseData.description);
    userInformation = info;
    userInformation.favoriteName = responseData.name;
    userInformation.favoriteDescription =  responseData.description;
  };

  signupService.getUserInformation = function() {
    return userInformation;
  };

};

})();
