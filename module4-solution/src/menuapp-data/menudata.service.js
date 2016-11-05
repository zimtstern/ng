(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {
      // https://davids-restaurant.herokuapp.com/categories.json
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      //https://davids-restaurant.herokuapp.com/menu_items.json?category=
    };

  };

})();
