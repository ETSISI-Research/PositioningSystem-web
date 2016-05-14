app.controller('MessagesController', function ($routeParams, $resource, $scope, $location, $route, $http) {

    var contactId = $routeParams.contactId;
	   var messageId = $routeParams.messageId;

    $scope.getMessage = function()
    {
        var Message = $resource('/api/messages/:id', { id: messageId });
        $scope.message = Message.get();
    }

    $scope.getUnreadMessages = function()
    {
        var Messages = $resource('/api/messages/unread');
        $scope.messages = Messages.query();
    }

    $scope.markAsReaded = function()
    {
        $resource('/api/messages/markAsReaded/:id', { id: messageId }).get();
    }

    $scope.getMessages = function()
    {
        var Messages = $resource('/api/messages');
        $scope.messages = Messages.query();
    }

    $scope.sendMessage = function ()
	{
		var contacts = $resource('/api/messages/send/:contactId', { contactId: contactId });
        if ($scope.sendMessageForm.$valid) {
            contacts.save($scope.message,
                function () {
                    $location.path('/contacts');
                }
            );
        }
	}
});
