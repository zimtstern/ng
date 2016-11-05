(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'src/templates/cmp/categories.html',
    bindings: {
      categories: '<'
    }
  });

})();
