'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
    $(document).ready(function(){
			$(".green").click(function(){
				$("h1").text("verde")
			})
	})

	 $(document).ready(function(){
			$(".red").click(function(){
				$("h1").text("rojo")
			})
	})


	 $(document).ready(function(){
			$(".blue").click(function(){
				$("h1").text("azul")
			})
	})


	 $(document).ready(function(){
			$(".yellow").click(function(){
				$("h1").text("amarillo")
			})
	})
  });
