(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', Serve);

  Serve.$Inject = ['$scope'];
  function Serve($scope) {
    $scope.List = "";
    $scope.Message = "";
    $scope.FindMessage=function () {
      var list = $scope.List;
      var items = list.split(',').filter(function(el) {return el.length != 0});;

      if(items.length == 0)
      $scope.Message = "Please enter data first";
      else if(items.length <= 3)
      $scope.Message = "Enjoy!";
      else if(items.length > 3)
      $scope.Message = "Too much!";
    };
  };

})();
