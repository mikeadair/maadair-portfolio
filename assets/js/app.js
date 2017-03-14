var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $("html, body").animate({ scrollTop: 0 }, 200);
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
            templateUrl: 'assets/html/contact.html',
            controller: 'ContactController'
        });
        
    
});

app.controller('PageController', function($scope) {
    
});

app.controller('ContactController', function($scope, $http) {
    $scope.subject;
    $scope.email;
    $scope.message;
    $scope.error;
    $scope.issue;
    
    $scope.submit = function(){
        if($scope.email != null && $scope.email != "" && $scope.email.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/)){
            if($scope.subject != null && $scope.subject != ""){
                if($scope.message != null && $scope.message != ""){
                    $scope.error = null;
                    $scope.issue = null;
                    var data = $.param({
                        message: $scope.message,
                        subject: $scope.subject,
                        email: $scope.email
                    });
                    $http.post('http://api.maadair.com:8888/sendmessage',data);
                }else{
                    $scope.error = "Message field is empty!";
                    $scope.issue = "message";
                }
            }else{
                $scope.error = "Subject field is empty!";
                $scope.issue = "subject";
            }
        }else{
            $scope.error = "Please give a valid E-mail Address!";
            $scope.issue = "email";
        }
    }
});