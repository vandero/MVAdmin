/**
 * Created by robin on 28/11/14.
 */

angular.module('MVAPI', ['ngResource'])
.factory('Clients', ['$resource', function($resource) {
    return $resource("https://mastervoice.azurewebsites.net/api/clientapi/:id", { id: '@ClientId' }, {
        update: {
            method: 'PUT'
        }
    });
}]);