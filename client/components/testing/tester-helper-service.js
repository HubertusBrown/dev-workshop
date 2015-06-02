'use strict';

var app = angular.module('devApp');

app.factory('testerHelperService', [function () {

    var testerMode = false;

    var isTesterMode = function () {
        return testerMode;
    };


    return {
        isTesterMode: isTesterMode
    }

}]);
