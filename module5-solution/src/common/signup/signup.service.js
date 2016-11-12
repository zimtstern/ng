(function() {
'use strict';

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var signupService = this;

  signupService.getCategoryByShortName = function(cat_shortname) {

    return $http.get(ApiPath + '/menu_items/' + cat_shortname + '.json');
  };

};

})();
