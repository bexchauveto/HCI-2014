var app = angular.module('plunker', ['snap']);

app.controller('MainCtrl', function($scope, SNAP_VERSION) {
  $scope.snapVersion = SNAP_VERSION.full;
  $scope.name = 'World';
});
