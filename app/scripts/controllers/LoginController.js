app.controller('LoginController', function ($routeParams, $cookieStore, $resource,$rootScope, $scope, $location, $window, AuthenticationService) {

    $scope.clearCredentials = function(){
      //AuthenticationService.ClearCredentials();
    }


    $scope.isLoggedIn = function(){
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        return $rootScope.globals.currentUser.isLoggedIn;
      }
      else {
        return false;
      }
    }


      $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
          if(response.success) {
            AuthenticationService.SetCredentials($scope.username, $scope.password);
            $location.path('/admin');
          }
          else {
            $scope.error = response.message;
            $scope.dataLoading = false;
          }
        });
      };

    $scope.signup = function () {
        var firstName = $scope.user.firstName
        var lastName = $scope.user.lastName
        var email = $scope.user.email
        var password = $scope.user.password
        var User = $resource('signup/:firstName/:lastName/:email/:password', { firstName: firstName, lastName: lastName, email: email, password: password});
        User.get(
            function (data) {
                if (data.response == "success") {
                    $location.path("/");
                }
            }
        );
    }

    $scope.logout = function () {
        AuthenticationService.ClearCredentials();
        $location.path("/");
    }

});
