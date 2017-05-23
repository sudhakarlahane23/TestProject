var myApp = angular.module("myApp", []);

myApp.factory("Data",function(){
    return {message:"I am data from a service."}
})
// myApp.   
function firstCtrl($scope, Data){
    $scope.data = Data;
}

function secondCtrl($scope, Data){
    $scope.data = Data;

    $scope.reverseMessage = function(msg){
        return msg.split("").reverse().join("");
    }
}