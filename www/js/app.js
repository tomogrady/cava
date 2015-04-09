	angular.module('cavamenu', ['ionic', 'cavamenu.controllers'])

	.config(function($stateProvider, $urlRouterProvider) {$stateProvider){
	$stateProvider
	
	
	
	
	
	controller: 'AppCtrl'
	})
	
	.state(app.dishes', {
	url: "/dishes/:dishesId",
	views: {
	'menuContent':{
	  templateUrl: "template/dishes.html",
	  controller: 'DishesCtrl'
	        }
		   }
		 });
		 
		 $surlRouterProvider.otherwise('/app/dishes/1');
		 });
	  
	  
	  
	  
	  
	  
	  
	
	
	

