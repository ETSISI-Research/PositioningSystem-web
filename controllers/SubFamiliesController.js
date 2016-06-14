app.controller('SubFamiliesController', function ($routeParams, $resource, $scope, $location, $route) {
    var familyId = $routeParams.familyId;
    var subfamilyId = $routeParams.subfamilyId;

    $scope.getSubfamily = function()
    {
        var SubFamily = $resource('subfamily/:familyId', { familyId: subfamilyId });
        $scope.subFamily = SubFamily.get();
    }

    $scope.getSubfamilies = function()
    {
        var Subfamilies = $resource('subfamilies/:familyId', { familyId: familyId });
        $scope.subfamilies = Subfamilies.query();
    }

    $scope.deleteSubfamily = function (subfamilyId) {
        var SubFamily = $resource('subfamilies/:id', { id: subfamilyId });
        SubFamily.delete(
            function () {
                $route.reload();
            }
        );
    }
  
    $scope.createSubfamily = function () {
        var subfamilies = $resource('subfamilies/:id', { id: familyId });
        if ($scope.createSubfamilyForm.$valid) {
            subfamilies.save($scope.subfamily,
                function () {
                    $location.path('/family/view/' + familyId);
                }
            );
        }
    }

    $scope.showTimelineChart = function()
      {
        var timeline;
        
        var options = {
          "width":  "100%",
          
          "style": "box"
        };
    

            var Charts = $resource('charts/subfamily/timeline/:subFamilyId', { subFamilyId: subfamilyId });
            var x = Charts.get().$promise.then(
              function(x){
                console.log(x);
                timeline = new links.Timeline(document.getElementById('timelineChartObject'), options);
                timeline.draw(new google.visualization.DataTable(x));

              }); 
          }

    $scope.updateSubFamily = function () {
        var SubFamily = $resource('subfamilies/:id', { id: subfamilyId }, { update: { method: 'PUT' } });
        if ($scope.subFamilyForm.$valid) {
            SubFamily.update($scope.subFamily,
                function () {
                    $location.path('/family/view/' + familyId);
                }
            );
        }
    }

});