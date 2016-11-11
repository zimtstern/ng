(function () {
'use strict';

angular.module('MenuApp')
.config(MenuAppConfig);

  MenuAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MenuAppConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })
    .state('categoryList', {
      url: '/categoryList',
      templateUrl: 'src/templates/categorylist.html',
      controller: 'CmpCategoriesListController as cmpCatCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });


    // .state({'categoryList', [
    //   url: '/categoryList',
    //   templateUrl: 'src/templates/categoryList.html'
    // ]});

    // .state({'categoryList.menuItems', [
    //   url: '/menuItems/{category}',
    //   templateUrl: '../templates/menuItems.html'
    // ]})
  };

})();