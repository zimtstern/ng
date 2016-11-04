(function () {
'use strict';

angular.module('Data')
.component('categories', {
    templateUrl: 'src/templates/cmp/categories.html',
    bindings: {
      items: '<'
    }
  }

})();
