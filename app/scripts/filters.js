'use strict';

angular.module('positioningSystemWebApp.filters', [])

.filter('title', [
    'applicationName',
    'separator',
    function(applicationName, separator) {
        return function(text) {
            return applicationName + separator + text;
        }
    }
]);
