'use strict';

// Directives

var app = angular.module('PositioningSystem.directives', []);
/*
    Adds copyright year, e.g.
    <p copyright>Company</p>
*/
app.directive('copyright', function() {

    return function(scope, elm, attrs) {

        var year = new Date().getFullYear();
        elm.prepend('&copy; ' + year + ' ');
    };
});

app.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);
