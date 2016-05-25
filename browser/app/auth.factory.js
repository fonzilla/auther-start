'use strict';


app.factory('Auth', function($http, $state){

	var Auth = {};

	Auth.session = null;

	Auth.signup = function(email, pass){
		$http.post('/api/users', {
			email: email,
			password: pass
		})
		.then(function(result){
			Auth.session = result.data;
			console.log(result);
			$state.go('stories');
		});
	};

	Auth.login = function(email, pass){
		$http.post('/api/login', {
			email: email,
			password: pass
		})
		.then(function(result){
			Auth.session = result.data;
			console.log(Auth.session);
			$state.go('stories');
		});
	};


	Auth.logout = function(){
		$http.get('api/login')
		.then(function(result){
			console.log(result);
			$state.go('home');
		});
	};


	return Auth;

})