(function () {
'use strict';

angular.module('MenuApp')
.component('menuitem', {
  templateUrl: 'src/templates/cmp/cmpmenuitems.html',
  bindings: {
    items: '<'
  }
});

})();
