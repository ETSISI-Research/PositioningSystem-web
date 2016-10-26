app.controller('MessagesController', function ($routeParams, $resource, $scope, $location, $route, $http) {

    var contactId = $routeParams.contactId;
	   var messageId = $routeParams.messageId;

    $scope.getMessage = function()
    {
        var Message = $resource('messages/:id', { id: messageId });
        $scope.message = Message.get();
    }

    $scope.getUnreadMessages = function()
    {
        var Messages = $resource('messages/unread');
        $scope.messages = Messages.query();
    }

    $scope.markAsReaded = function()
    {
        $resource('messages/markAsReaded/:id', { id: messageId }).get();
    }

    $scope.getMessages = function()
    {
        var Messages = $resource('messages');
        $scope.messages = Messages.query();
    }

    $scope.sendMessage = function ()
	{
		var contacts = $resource('messages/send/:contactId', { contactId: contactId });
        if ($scope.sendMessageForm.$valid) {
            contacts.save($scope.message,
                function () {
                    $location.path('/contacts');
                }
            );
        }
	}
});
