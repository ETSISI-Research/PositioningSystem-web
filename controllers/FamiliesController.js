app.controller('FamiliesController', function ($routeParams, $resource, $scope, $location, $route, $http) {

    var projectId = $routeParams.projectId;
    var familyId = $routeParams.familyId;

    $scope.getFamily = function()
    {
        var Family = $resource('/api/family/:id', { id: familyId });
        $scope.family = Family.get();
    }

    $scope.createFamily = function () {
        var families = $resource('/api/families/:id', { id: projectId });
        if ($scope.createFamilyForm.$valid) {
            families.save($scope.family,
                function () {
                    $location.path('/project/view/' + projectId);
                }
            );
        }
    }

    $scope.updateFamily = function () {
        var Family = $resource('/api/families/:id', { id: familyId });
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
        var Families = $resource('/api/families/:projectId', { projectId: projectId });
        $scope.families = Families.query();
    }

    $scope.deleteFamily = function (familyId) {
        var Family = $resource('/api/families/:id', { id: familyId });
        Family.delete(
            function () {
                $route.reload();
            }
        );
    }

});
