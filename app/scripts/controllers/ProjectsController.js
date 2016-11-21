app.controller('ProjectsController', function ($routeParams, $resource, $scope, $location, $route) {
    
    var projectId = $routeParams.projectId;
    var snapshotId = $routeParams.snapshotId;
    
    $scope.getProject = function()
    {
        var Project = $resource('projects/:id', { id: projectId });
        $scope.project = Project.get();
    }

    $scope.getProjects = function()
    {
        var Projects = $resource('projects');
        $scope.projects = Projects.query();
    }

    $scope.getOthersProject = function()
    {
        var OtherProject = $resource('projects/others/:id', { id: projectId});
        $scope.othersProject = OtherProject.get();
    }

    $scope.getAssociates = function()
    {
        var Users = $resource('projects/associates/:id', { id: projectId });
        $scope.users = Users.query();
    }

    $scope.uploader = {};
    $scope.upload = function () {
        var folder = 'projects'
        $scope.uploader.flow.files[0].flowObj.files[0].uniqueIdentifier = projectId;
        $scope.uploader.flow.opts.testChunks = false;
        $scope.uploader.flow.opts.target = 'api/upload/' + folder;
        $scope.uploader.flow.upload();
    }


    $scope.takeSnapshot = function ()
    {
        $scope.snapshot.id = projectId;
        var Charts = $resource('projects/snapshot');
        var data = Charts.save($scope.snapshot).$promise.then(
        function(data){
           $location.path('/project/snapshots/' + projectId);
        });   
    }


    $scope.columnType ="col-lg-12";
    $scope.$watch('selectedId', function() {
       if($scope.selectedId != undefined)
       {
        $scope.columnType = "col-lg-6";
        var Charts = $resource('projects/spider/:projectId/:snapshotId/:compareId', { projectId: projectId, snapshotId: snapshotId, compareId: $scope.selectedId });
        var data = Charts.get().$promise.then(
            function(data){
                var ctx = document.getElementById("compareSpiderChart").getContext("2d");
                $scope.compareSpiderChart = new Chart(ctx).Radar(data, options);
            }
        );  
       }
    });


    $scope.getSnapshots = function()
    {
        var Snapshots = $resource('snapshots/:projectId', { projectId: projectId });
        $scope.snapshots = Snapshots.query();
        $scope.projectId = projectId;
    }


    $scope.sendProjectInvitation = function () {
                $scope.error = null;
        $scope.success = null;
        var contacts = $resource('projects/invite/:projectId', { projectId: projectId });
        if ($scope.sendInvitationForm.$valid) {
            contacts.save($scope.contact,
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

    $scope.createProject = function () {
        var projects = $resource('projects');
        if ($scope.createProjectForm.$valid) {
            projects.save($scope.project,
                function () {
                    $location.path('/projects');
                }
            );
        }
    }

    $scope.updateProject = function () {

        var Project = $resource('projects/:id', { id: projectId }, { update: { method: 'PUT' } });

        if ($scope.projectForm.$valid) {
            Project.update($scope.project,
                function () {
                    $location.path('/projects');
                }
            );
        }
    }

    $scope.showColumnsChart = function () {
        var Charts = $resource('charts/columns/:projectId', { projectId: projectId });
        var data = Charts.get().$promise.then(
        function(data){
            $scope.columnsChartObject = data;
        });   
    };

    $scope.showPieChart = function () {

        var Charts = $resource('charts/pie/:projectId', { projectId: projectId });
        var data = Charts.get().$promise.then(
        function(data){
            $scope.pieChartObject = data;
        });   
    };

    $scope.showPartnersPieChart = function () {

        var Charts = $resource('charts/pie/partners/:projectId', { projectId: projectId });
        var data = Charts.get().$promise.then(
        function(data){
            $scope.partnersPieChart = data;
        });   
    };

    $scope.showCountriesPieChart = function () {

        var Charts = $resource('charts/pie/countries/:projectId', { projectId: projectId });
        var data = Charts.get().$promise.then(
        function(data){
            $scope.countriesPieChart = data;
        });  
    };

    var options = {
        // Boolean - Whether to animate the chart
        animation: true,

        // Number - Number of animation steps
        animationSteps: 200,

        // String - Animation easing effect
        animationEasing: "easeOutQuart",

        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 10,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 10,
        // Number - The scale starting value
        scaleStartValue: 0,

        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",

        // Number - Pixel width of the scale line
        scaleLineWidth: 2,

        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 12,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: "#666",

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    }
                   
    $scope.showRadarChart = function () {
        var Charts = $resource('charts/spider/:projectId', { projectId: projectId });
        var data = Charts.get().$promise.then(
            function(data){
                var ctx = document.getElementById("spiderChart").getContext("2d");
                $scope.spiderChart = new Chart(ctx).Radar(data, options);
            }
        );  
        
    };
    
    $scope.getOthersProjects = function()
    {
        var OtherProjects = $resource('projects/others');
        $scope.othersProjects = OtherProjects.query();
    }
    $scope.deleteProject = function (projectId) {
        var Project = $resource('projects/:id', { id: projectId });
        Project.delete(
            function () {
                $route.reload();
            }
        );
    }
});