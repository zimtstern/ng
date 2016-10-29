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
    console.log(responsePromise);
  };

  function doHttpRequest() {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  };

};



})();

// gib den suchbegriff weiter an den controller
// hol dir dir ganze liste

// menu item, its short_name, and the description
