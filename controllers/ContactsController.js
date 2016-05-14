app.controller('ContactsController', function ($routeParams, $resource, $scope, $location, $route, $http) {

    $scope.getContacts = function()
    {
    	var Contacts = $resource('/api/contacts');
    	$scope.contacts = Contacts.query();
    }

    $scope.getContactRequests = function()
    {
    	var ContactRequests = $resource('/api/contacts/requests');
    	$scope.contactRequests = ContactRequests.query();
    }

    $scope.sendInvitation = function (email) {
        $scope.error = null;
        $scope.success = null;
        var contacts = $resource('/api/contacts/add/:email', { email: $scope.contact.email });
        if ($scope.sendInvitationForm.$valid) {
            contacts.save($scope.contact,
                function (response) {
                   if(response.error){
                        $scope.error = response.error;
                   }
                   else {
                        $scope.success = response.success;
                   }
                }
                );
        }
    }

    $scope.accept = function(id)
    {
        var contacts = $resource('/api/contacts/accept/:id', { id: id });
        contacts.save($scope.contact,
            function () {
                    $location.path('/contacts');
                }
            );
    }

});
