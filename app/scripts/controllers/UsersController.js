app.controller('UsersController', function ($routeParams, $resource, $scope, $location, $route) {

    $scope.getUser = function()
    {
        $scope.user = $resource('user').get();
    }

	$scope.updateUser = function () {
        var User = $resource('user/', {  }, { update: { method: 'PUT' } });

        if ($scope.profileForm.$valid) {
            User.update($scope.user,
                function (response) {
                    if(response.error)
                   {
                        $scope.error = response.error;
                   }
                   else
                   {
                        $scope.success = response.success;
                   }
                }
            );
        }
    }

});