(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userInfo', 'ApiPath'];
  function MyInfoController(userInfo, ApiPath) {
    var myInfoCtrl = this;

    if(userInfo.firstName !== undefined) {
      myInfoCtrl.signedUp = true;
      myInfoCtrl.userInfo = userInfo;
      myInfoCtrl.basePath = ApiPath;
      return;
    }
    myInfoCtrl.signedUp = false;
  };
})();
