var app=angular.module("myApp", []); //[] để trống để sau load thư viện
    app.controller("myControl",function($scope){
        $scope.lib={}; //khai báo object lib
        $scope.lib.name="Angular JS";
    });