(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyController = this;

    buyController.toBuyList = ShoppingListCheckOffService.getToBuyList();
    buyController.allBoughtMessage = "Everything is bought!";

    // this adds removes the product from buyList and adds it to boughtList
    buyController.buyProduct = function (item) {
      ShoppingListCheckOffService.buyProduct(item);
    };

    // this checks if the given toBuyList is empty
    buyController.allBought = function() {
      return ShoppingListCheckOffService.isEmpty(buyController.toBuyList);
    };
  };


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtController = this;

    boughtController.boughList = ShoppingListCheckOffService.getBoughtList();
    boughtController.nothingBoughtMessage = "Nothing bought yet";

    boughtController.nothingBoughtYet = function() {
      return ShoppingListCheckOffService.isEmpty(boughtController.boughList);
    };
  };


  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {name: "Cookies", quantity: 10},
      {name: "Milk", quantity: 3},
      {name: "Chips", quantity: 5},
      {name: "Apple", quantity: 1},
      {name: "Banana", quantity: 10}
    ];

    var boughtList = [];

    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getBoughtList = function() {
      return boughtList;
    };

    service.buyProduct = function(item) {
        removeFromBuyList(item);
        addToBoughtList(item);
    };

    service.isEmpty = function(list) {
      var empty = list === undefined || list.length == 0;
      return empty;
    };

    function removeFromBuyList(item) {
      var index = toBuyList.indexOf(item);
      toBuyList.splice(index, 1);
      console.log("index removed: " + index);
    };

    function addToBoughtList(item) {
      boughtList.push(item);
      console.log("item added: " + item.name + ", " + item.quantity);
    };

  };

})();
