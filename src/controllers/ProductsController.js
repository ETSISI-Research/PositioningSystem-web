app.controller('ProductsController', function ($routeParams, $resource, $scope, $location, $route) {

    var subfamilyId = $routeParams.subfamilyId;
    var productId = $routeParams.productId;

    $scope.getProduct = function()
    {
        var Product = $resource('product/:id', { id: productId });
        $scope.product = Product.get();
    }

    $scope.getProducts = function()
    {
        var Products = $resource('products/:subfamilyId', { subfamilyId: subfamilyId });
        $scope.products = Products.query();
    }

    $scope.getProductsByStatus = function(status)
    {
        var ProductsByStatus = $resource('products/status/:status', { status: status });
        $scope.productsByStatus = ProductsByStatus.query();
    }
    
    $scope.createProduct = function () {
        var products = $resource('products/:subfamilyId', { subfamilyId: subfamilyId } );
        if ($scope.createProductForm.$valid) {
            products.save($scope.product,
                function () {
                    $location.path('/subfamily/view/' + subfamilyId);
                }
            );
        }
    }

    $scope.updateProduct = function () {

        var Product = $resource('products/:productId', { productId: productId }, { update: { method: 'PUT' } });

        if ($scope.productForm.$valid) {
            Product.update($scope.product,
                function () {
                    $location.path('/subfamily/view/' + subfamilyId);
                }
            );
        }
    }

    $scope.deleteProduct = function (productId) {

        var Product = $resource('products/:id', { id: productId });

        Product.delete(
            function () {
                $route.reload();
            }
        );
    }

});