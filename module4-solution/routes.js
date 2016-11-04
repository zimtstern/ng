(function () {
'use strict';

angular.module('MenuApp')
.config(MenuAppConfig);

  MenuAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MenuAppConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state({'categoryList', [
      url: '/categoryList',
      templateUrl: '/templates/categoryList.html'
    ]});

    // .state({'categoryList.menuItems', [
    //   url: '/menuItems/{category}',
    //   templateUrl: '../templates/menuItems.html'
    // ]})
  };

})();
