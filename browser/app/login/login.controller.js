'use strict';


app.controller('LoginCtrl', function($scope, Auth){

	$scope.submitLogin = Auth.login;

	$scope.isAdmin = Auth.session.isAdmin;


});