'use strict';

var app = angular.module('PositioningSystem.filters', []);

app.filter('title', [
    'applicationName',
    'separator',
    function(applicationName, separator) {
        return function(text) {
            return applicationName + separator + text;
        }
    }
]);
