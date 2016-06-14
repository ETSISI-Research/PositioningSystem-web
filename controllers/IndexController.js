app.controller('IndexController', ['$routeParams','$resource','$rootScope','$scope', '$location', '$http', function ($routeParams, $resource, $rootScope, $scope, $location,applicationName)  {
  $scope.applicationName = applicationName;

  $scope.showGaugeChart = function() {
    var Charts = $resource('charts/gauge');
    var data = Charts.get().$promise.then(
      function(data){
        $scope.gaugeChartObject = data;
      });
  }

  $scope.showPartnersEfficiencyChart = function () {
    // TODO
    // Solve this bullshit hardcoded 1
    var Charts = $resource('charts/partnersEfficiency/:projectId', { projectId: 1 });

    var data = Charts.get().$promise.then(
      function(data){
        $scope.partnersEfficiencyChart = data;
      });
  };


  // TBR
  $scope.showTimelineChart = function()
  {
    var timeline;

    var options = {
      "width":  "100%",

      "style": "box"
    };
    var Charts = $resource('charts/timeline/:projectId', { projectId: 1 });
    var x = Charts.get().$promise.then(
      function(x){
        timeline = new links.Timeline(document.getElementById('timelineChartObject'), options);
        timeline.draw(new google.visualization.DataTable(x));

      });
  }

}]);
