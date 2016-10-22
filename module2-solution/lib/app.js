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

    buyController.buyProduct = function (item) {
      try {
        ShoppingListCheckOffService.buyProduct(item);
      } catch(error) {
        buyController.errorMessage = error.message;
      }
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
      // if(isEmpty(boughtList)) {
      //   console.log("bought list is empty");
      //   throw new Error("Nothing bought yet");
      // }
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

      if(service.isEmpty(toBuyList)) {
        throw new Error("Everything is bought!");
      }
    };

    function addToBoughtList(item) {
      boughtList.push(item);
      console.log("item added: " + item.name + ", " + item.quantity);
    };

  };

})();


// 2 lists "To Buy" + "Already Bought"
// To Buy : 5 items similar to { name: "cookies", quantity: 10 }
// Format:  Buy item_quantity item_name -> item { name: "cookies", quantity: 10 } would be listed as Buy 10 cookies
// next to each item button with the label "Bought" -> ng-click moveToBought()
// if empty message "Everything is bought!"

// "Already Bought" empty and "Nothing bought yet" -> only when emptyMessage
// Bought item_quantity item_name  For example Bought 10 cookies
