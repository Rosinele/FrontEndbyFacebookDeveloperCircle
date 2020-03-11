var app = angular.module('loginApp',['ngMaterial','ngMessages']);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.loginModel = {
        userName: '',
        password: ''
    };
    
}]);