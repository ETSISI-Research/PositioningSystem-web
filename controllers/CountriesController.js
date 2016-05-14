app.controller('CountriesController', function ($resource, $scope, $location, $route) {

    var Countries = $resource('/api/countries');
    $scope.countries = Countries.query();
    
    $scope.deleteCountry = function (countryId) {
        var Country = $resource('/api/countries/:id', { id: countryId });
        Country.delete(
            function () {
                $route.reload();
            }
        );
    }
});