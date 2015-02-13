angular.module('HomeApp', ['HomeApp.controllers']);
angular.module('sharedApp', ['sharedServices.services']);
angular.module('DokSmartAppServices', ['DokSmartAppServices.services']);
angular.module('MainApp',['HomeApp', 'sharedApp', 'DokSmartAppServices']);

    

/* to avoid routing while clicking tabs,needs to be converted to a directive
angular.module('tabClick', []).run(function ($rootScope) {

    $rootScope.tabClick = function ($event) {
        $event.preventDefault();
    };

});*/

