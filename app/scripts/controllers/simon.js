'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {

 		$scope.colores = [];   
  		$scope.titulo = 'Simón';
  		$scope.acumulador = 0;
  		$scope.acumuladorverde = 0;
  		$scope.acumuladorrojo = 0;
  		$scope.acumuladorazul = 0;
  		$scope.acumuladoramarillo = 0;


    	$scope.play=function(color){

    		switch (color) {
    case ('verde'):
        $scope.acumuladorverde++;
        break;
    case ('rojo'):
        $scope.acumuladorrojo++;
        break;
    case ('azul'):
        $scope.acumuladorazul++;
        break;
    /*case ('amarillo'):
        $scope.acumuladoramarillo++;
        break;*/
    default:
        alert('La has cagado');
    }
    		/*if(color=='verde'){
    			
    			$scope.acumuladorverde++;
    		} 
    		else if(color=='rojo') {
    		
    			$scope.acumuladorrojo++;

			} else if(color=='azul') {
    		
				$scope.acumuladorazul++;

			} else if(color=='amarillo') {

    			$scope.acumuladoramarillo++;
			}*/
		



    		$scope.colores.push(color);
    	}

    	$scope.borrar=function(){
    		$scope.colores = [];
    		$scope.acumulador = 0;
    		$scope.acumuladorojo = 0;
    		$scope.acumuladorazul = 0;
    		$scope.acumuladorverde = 0;
    		$scope.acumuladoramarillo = 0;

    	}
  });
