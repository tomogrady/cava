   angular.module('cavamenu.controllers', [])

   .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
   })
   
   .controller('DishesCtrl', function($scope, $stateParams) {
   $scope.dishesId = $tateParams.dishesId;
	});
