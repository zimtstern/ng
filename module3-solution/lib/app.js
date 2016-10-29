(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = "";

  ctrl.narrowItDown = function() {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
  };

};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var found = [];
    var responsePromise = doHttpRequest();
    responsePromise.then(function(response) {
      filterResults(response.data);


    }).catch(function(error) {
      //console.error("Data could not be received from server: " + error);
    });
  };

  function doHttpRequest() {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  };

  function filterResults(menuData) {
    console.log("in filter: " + menuData);
    for(var index = 0; index < menuData.length; index++) {
      var obj = menuData[index];
      console.log(obj);
    }

  };

};



})();

// gib den suchbegriff weiter an den controller
// hol dir dir ganze liste

// menu item, its short_name, and the description
