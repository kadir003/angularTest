(function(angular, undefined) {
'use strict';

angular.module('testangularApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);