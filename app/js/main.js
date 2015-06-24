;(function (){

  'use strict';

  angular.module('likeBtnModule', [])

  .controller('likeBtnController', ['$scope', function ($scope) {

    $scope.allClicks = [];

    var ClickCount = function (clickCount) {
      this.count = 0;
    };

    $scope.amtClicked = function (amtClicked) {
      var c = new ClickCount ();
      c.count = +1;
      $scope.allClicks.push(c);
    };

    $scope.counter = function (counter) {
      return $scope.allClicks.length;
    };

  }]);

}());