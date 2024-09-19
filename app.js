const app = angular.module('myApp', []);
app.controller('authController', function($scope, $window) {
    const auth0Client = new auth0.WebAuth({
        domain: 'dev-5g04lce7ud43ecyo.us.auth0.com',
        clientID: 'FE1R3Xh9f454HbWVtZLd4BC0cwX6YKAH',
        redirectUri: 'http://localhost:8080',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });
    $scope.login = function() {
        auth0Client.authorize();
    };
    $scope.logout = function() {
        $window.localStorage.removeItem('access_token');
        $window.location.href = '/';
    };
    $scope.handleAuth = function() {
        auth0Client.parseHash(function(err, authResult) {
            if (authResult && authResult.accessToken) {
                $window.localStorage.setItem('access_token', authResult.accessToken);
                $window.localStorage.setItem('id_token', authResult.idToken);
                $scope.authenticated = true;
                $scope.$apply();
            } else if (err) {
                console.error('Error: ', err);
            }
        });
    };
    $scope.checkAuthentication = function() {
        const token = $window.localStorage.getItem('access_token');
        if (token) {
            $scope.authenticated = true;
        } else {
            $scope.authenticated = false;
        }
    };
    $scope.checkAuthentication();
    if (!$scope.authenticated) {
        $scope.handleAuth();
    }
    $scope.submitForm = function(dataForm) {
		if (dataForm && dataForm.$valid) {
			$scope.submitted = true;
			console.log('Form Submitted', $scope.user);
		} else {
			console.log('Form Invalid');
		}
	};
	$scope.sanitizeSubmission = function(name) {
        if (name) {
            console.log('Sanitizing submission for name:', name);
            $scope.sanitized = true;
        } else {
            console.log('Name is required for sanitization.');
            $scope.sanitized = false;
        }
    };
});
