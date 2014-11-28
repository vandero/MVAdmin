'use strict';

angular.module('myApp.view1', ['ngRoute', 'MVAPI'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['Clients', function (Clients) {
        var clients = Clients.query();
        console.log(clients.length);
    }]);