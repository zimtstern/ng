(function () {
'use strict';

angular.module('Data')
.controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['menuData'];
  function MenuItemsController(menuData) {
    var menuItemsCtrl = this;
    
    menuItemsCtrl.menuData = menuData.data.menu_items;
  };

})();
