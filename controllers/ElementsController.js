app.controller('ElementsController', function ($routeParams, $resource, $scope, $location, $route, $http) {

  scope.createProduct = function () {
      var products = $resource('/api/products/:subfamilyId', { subfamilyId: subfamilyId } );
      if ($scope.createProductForm.$valid) {
          products.save($scope.product,
              function () {
                  $location.path('/subfamily/view/' + subfamilyId);
              }
          );
      }
  }

  $scope.create = function (){
    // TODO
    var element = $resource('/api/:resource/:parentId', {resource : element.type, parentId : parentId});
  }
  $scope.get = function (){
    // TODO
  }
  $scope.query = function (){
    // TODO
  }
  $scope.update = function (){
    // TODO
  }
  $scope.delete = function (){
    // TODO
  }
});
