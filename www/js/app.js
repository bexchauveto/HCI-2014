//Define an angular module for our app
var ap = angular.module('app', ['ngRoute', 'snap']);

//Define Routing for app
//Uri /home -> template home.html
ap.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/mySchedule', {templateUrl: 'partials/mySchedule.html'})
        .when('/info', {templateUrl: 'partials/info.html'})
        .when('/people', {templateUrl: 'partials/people.html'})
        .when('/map', {templateUrl: 'partials/map.html'})
        .when('/about', {templateUrl: 'partials/about.html'})
        .otherwise({redirectTo: '/home'})
}]);

ap.controller('MainCtrl', function($scope) {
    $scope.menu = 'home';
    $scope.opts = {
        disable: 'right'
    };
});










































var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
