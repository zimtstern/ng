(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['categories'];
  function CategoriesListController(categories) {
    var catCtrl = this;

    catCtrl.categoriesList = categories.data;
  };

})();
