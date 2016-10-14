(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LuckCheckController);

  LuckCheckController.$inject = ['$scope'];
  function LuckCheckController($scope) {
    $scope.message = "";
    $scope.items = "";

    $scope.check = function() {
        var msgEmpty = "Please enter data first";
        var msgEnjoy = "Enjoy!";
        var msgTooMuch = "Too much!";

        if($scope.items == "") {
          $scope.message = msgEmpty;
          return;
        }

        var itemsCount = $scope.items.split(',').length;

        if(itemsCount <= 3 && $scope.itemsCount != "") {
          $scope.message = msgEnjoy;
          return;
        }

        $scope.message = msgTooMuch;
    };

  };
})();
