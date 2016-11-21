app.controller('FamiliesController', function ($routeParams, $resource, $scope, $location, $route, $http) {

    var projectId = $routeParams.projectId;
    var familyId = $routeParams.familyId;

    $scope.getFamily = function()
    {
        var Family = $resource('family/:id', { id: familyId });
        $scope.family = Family.get();
    }

    $scope.createFamily = function () {
        var families = $resource('families/:id', { id: projectId });
        if ($scope.createFamilyForm.$valid) {
            families.save($scope.family,
                function () {
                    $location.path('/project/view/' + projectId);
                }
            );
        }
    }

    $scope.updateFamily = function () {
        var Family = $resource('families/:id', { id: familyId });
        if ($scope.familyForm.$valid) {
            Family.update($scope.family,
                function () {
                    $location.path('/project/view/' + projectId);
                }
            );
        }
    }

    $scope.getFamilies = function ()
    {
        var Families = $resource('families/:projectId', { projectId: projectId });
        $scope.families = Families.query();
    }

    $scope.deleteFamily = function (familyId) {
        var Family = $resource('families/:id', { id: familyId });
        Family.delete(
            function () {
                $route.reload();
            }
        );
    }

});
