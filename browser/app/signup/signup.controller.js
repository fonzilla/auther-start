'use strict';


app.controller('SignupCtrl', function($scope, Auth){

	$scope.createUser = Auth.signup;

	$scope.isAdmin = Auth.session.isAdmin;

});