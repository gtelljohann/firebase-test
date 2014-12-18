'use strict';

/**
 * @ngdoc function
 * @name hackDayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackDayApp
 */
angular.module('hackDayApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
