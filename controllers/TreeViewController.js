app.controller('TreeViewController', function ($routeParams, $resource, $scope, $http) {
    $scope.my_tree_handler = function (branch) {
        var _ref;
        $scope.selectedParentId = branch.parentId;
        $scope.selectedId = branch.id;
        $scope.selectedType = branch.type;
        $scope.selectedName = branch.label;
        $scope.selectedDescription = branch.data.description;
        $scope.output = "You selected: " + branch.label;
        if ((_ref = branch.data) != null ? _ref.description : void 0) {
            return $scope.output += '(' + branch.data.description + ')';
        }
    };
    var projectId = $routeParams.projectId;
    var Families = $resource('/api/treeview/:projectId', { projectId: projectId });
    $scope.my_data = Families.query();
});