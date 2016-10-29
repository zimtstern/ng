(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = "";
  ctrl.found = [];

  ctrl.narrowItDown = function() {
    if(!ctrl.searchTerm || ctrl.searchTerm.length === 0) {
      console.log("Nothing to search becaus because given searchTerm not filled");
      return;
    }
    ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    console.log(ctrl.found);
  };

};

MenuSearchService.$inject = ['$q', '$http'];
function MenuSearchService($q, $http) {
  var service = this;

  service.found = [];

  service.getMatchedMenuItems = function(searchTerm) {
    var httpPromise = doHttpRequest();
    httpPromise.then(function(response) {
      return filterResults(response.data.menu_items, searchTerm);
    }).then(function(response) {
      service.found = response;
    }).catch(function(error) {
      console.error("Data could not be received from server: " + error.message);
    });
    return service.found;
  };

  function doHttpRequest() {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  };


  // service.checkName = function (name) {
  //   var deferred = $q.defer();
  //
  //   var result = {
  //     message: ""
  //   };
  //
  //   $timeout(function () {
  //     // Check for cookies
  //     if (name.toLowerCase().indexOf('cookie') === -1) {
  //       deferred.resolve(result)
  //     }
  //     else {
  //       result.message = "Stay away from cookies, Yaakov!";
  //       deferred.reject(result);
  //     }
  //   }, 3000);
  //
  //   return deferred.promise;
  // };

  function filterResults(menu_items, searchTerm) {
    var deffered = $q.defer();

    var found = [];
    for(var index = 0; index < menu_items.length; index++) {
      var currentItem = menu_items[index];
      if(currentItem.description.indexOf(searchTerm) !== -1) {
        // console.log("Found in description: " + currentItem.description);
        found.push(currentItem);
      }
    }

    console.log("The searched term: " + searchTerm + " found in "
      + found.length + " descriptions");


    if(found.length > 0) {
      deffered.resolve(found);
    } else {
      deffered.reject("Nothing found");
    }

    return deffered.promise;
  };

};



})();

// gib den suchbegriff weiter an den controller
// hol dir dir ganze liste

// menu item, its short_name, and the description
