(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',DIController);

DIController.$inject = ['$scope','$filter'];
function DIController($scope,$filter){
  $scope.dishes = "";
  $scope.countDished = function(){
      // split dishes
      let elems = $scope.dishes.split(',');
      // remove empty
      elems = $filter('filter')(elems,e=>e!="");
      // nothing
      if(elems.length==0)
      {
        $scope.message="Please enter data first";
        $scope.textColor = "text-danger";
        $scope.borderColor = "border-danger";
      }
      // ok
      else if(elems.length<=3)
      {
        $scope.message="Enjoy!";
        $scope.textColor = "text-success";
        $scope.borderColor = "border-success";
      }
      // ko
      else if(elems.length>3)
      {
        $scope.message="Too much!";
        $scope.textColor = "text-success";
        $scope.borderColor = "border-success";
      }
    };
  }

})();
