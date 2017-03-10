var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/about');
    
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'assets/html/about.html'
        })
        
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'assets/html/portfolio.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'assets/html/contact.html'
        });
        
    
});

app.controller('PageController', function($scope) {
    
});