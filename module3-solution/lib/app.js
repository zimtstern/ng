(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var controller = this;
  controller.searchTerm = "";
  controller.found = [];

  $scope.$watch('controller.found', function() {
      console.log("updates the found list");
  });

  controller.narrowItDown = function() {
    if(!controller.searchTerm || controller.searchTerm.length === 0) {
      console.log("Nothing to search becaus because given searchTerm not filled");
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    promise.then(function(result) {
      controller.found = result;
    })
    .catch(function(error) {
      console.error(error);
    });

  };

};

MenuSearchService.$inject = ['$q', '$http'];
function MenuSearchService($q, $http) {
  var service = this;

  // service.found = [];

  service.getMatchedMenuItems = function(searchTerm) {
    var defferer = $q.defer();

    var httpPromise = doHttpRequest();
    httpPromise.then(function(response) {
      return filterResults(response.data.menu_items, searchTerm);
    }).then(function(response) {
      defferer.resolve(response);
    }).catch(function(error) {
      defferer.reject(error);
    });

    return defferer.promise;
  };

  function doHttpRequest() {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
  };

  function filterResults(menu_items, searchTerm) {
    var deffered = $q.defer();

    var found = [];
    for(var index = 0; index < menu_items.length; index++) {
      var currentItem = menu_items[index];
      if(currentItem.description.indexOf(searchTerm) !== -1) {
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
