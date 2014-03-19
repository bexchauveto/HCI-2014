//Define an angular module for our app
var route = angular.module('app', ['ngRoute']);

//Define Routing for app
//Uri /home -> template home.html
route.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'partials/home.html'})
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/about', {templateUrl: 'partials/about.html'})
        .otherwise({redirectTo: '/home'})
}]);



var ap = angular.module('app', ['snap']);

ap.controller('MainCtrl', function($scope) {
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
