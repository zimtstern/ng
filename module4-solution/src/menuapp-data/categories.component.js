(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'src/templates/cmp/cmpcategories.html',
    bindings: {
      categories: '<'
    }
  });

})();
