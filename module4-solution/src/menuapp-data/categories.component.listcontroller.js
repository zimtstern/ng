(function () {
'use strict';

angular.module('Data')
.controller('CmpCategoriesListController', CmpCategoriesListController);

  CmpCategoriesListController.$inject = ['categories'];
  function CmpCategoriesListController(categories) {
    var cmpCatCtrl = this;

    console.log(categories.data);
    cmpCatCtrl.categoriesList = categories.data;
    // categories.then(function(response) {
    //   console.log("Promise" + response);
    //   console.log("Data: " + response.data);
    //   console.log("FIRST NAME: " + response.data[0].name);
    //   cmpCatCtrl.categoriesList = response.data;
    // });


  };

})();
