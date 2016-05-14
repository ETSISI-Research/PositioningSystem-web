app.controller('PartnersController', function ($routeParams, $resource, $scope, $location, $route) {

    var partnerId = $routeParams.partnerId;

    if (partnerId) {
        var Partner = $resource('/api/partners/:id', { id: partnerId });
        $scope.partner = Partner.get();
    }

    var Countries = $resource('/api/countries');
    $scope.countries = Countries.query();

    $scope.uploader = {};
    $scope.upload = function () {
        var folder = 'partners'
        $scope.uploader.flow.files[0].flowObj.files[0].uniqueIdentifier = partnerId + $scope.partner.creationDate;
        $scope.uploader.flow.opts.testChunks = false;
        $scope.uploader.flow.opts.target = 'api/upload/' + folder;
        $scope.uploader.flow.upload();
    }

    $scope.createPartner = function () {
        var partners = $resource('/api/partners');
        if ($scope.createPartnerForm.$valid) {
            partners.save($scope.partner,
                function () {
                    $location.path('/partners');
                }
            );
        }
    }

    $scope.updatePartner = function () {
        var Partner = $resource('/api/partners/:id', { id: partnerId }, { update: { method: 'PUT' } });
        if ($scope.partnerForm.$valid) {
            Partner.update($scope.partner,
                function () {
                    $location.path('/partners');
                }
            );
        }
    }

    $scope.getPartners = function()
    {
        var Partners = $resource('/api/partners');
        $scope.partners = Partners.query();
    }
    
    $scope.deletePartner = function (partnerId) {
        var Partner = $resource('/api/partners/:id', { id: partnerId });
        Partner.delete(
            function () {
                $route.reload();
            }
        );
    }

});