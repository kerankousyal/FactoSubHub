angular.module('sharedServices.services', [])
    .factory('sharedProperties', function() {

        var username = '';

        var objectValue = '';

        return {
            username : ''

        };

    });
angular.module('DokSmartAppServices.services', [])
    .factory('documentTypeListService', function($http) {

        var doksmartAPI = {};

        doksmartAPI.getDocTypes = function() {
            return $http({
                method: 'GET',
                url: 'http://203.143.31.210/DokSMARTWebSvc/DokSMARTWebSvc.asmx/ReadDocumentType?username=administrator'
            }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert('error in service!!');
                });
        }

        return doksmartAPI;
    });