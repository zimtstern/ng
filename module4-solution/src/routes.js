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
      controller: 'CategoriesListController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('menuItems', {
      url: '/menuItems/{categoryShortName}',
      templateUrl: 'src/templates/menuitems.html',
      controller: 'MenuItemsController as menuItemsCtrl',
      resolve: {
        menuData: ['$stateParams', 'MenuDataService',
          function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
      }
    });

  };

})();
