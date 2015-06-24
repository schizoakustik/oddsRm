'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',
    ['$scope',
      function($scope) {
        $scope.players = [
          {
            name: "Linus",
            image: "../img/linus.png",
            winnings: -200
          },
          {
            name: "Karl",
            image: "../img/karl.png",
            winnings: -200
          },
          {
            name: "Petter",
            image: "../img/petter.png",
            winnings: -187
          }
        ];
        $scope.editWinnings = function(index, win){

            $scope.players[index].winnings += parseInt(win, 10);
         //   console.log($scope.players[index].winnings + parseInt(win, 10));

        };
    }
]);