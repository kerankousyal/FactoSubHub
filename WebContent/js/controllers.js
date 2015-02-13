
angular.module('HomeApp.controllers', []).
    controller('HomeController', function($scope ,sharedProperties ,$http) {

    	$scope.search = function() {

            //sharedProperties.username = $scope.username ;
    		//console.log($scope.nameFilter);
    		$http({
                method: 'GET',
                url: "http://lookup.dbpedia.org/api/search/PrefixSearch?MaxHits=5&QueryString="+$scope.nameFilter
            }).
                success(function(data, status) {

                    if(data.status='success') {
                    	console.log(data.results);
                        //console.log(data.results[0].label);
                        $scope.searchResult = data.results;
                        //$location.path('/home');
                    }
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert('invalid credentials,try again!!');
                    $location.path('/');
                });


        };
        
        $scope.selectItem = function(selectedID) {

        	console.log(selectedID);
        	
        	var inputData = "{" + "\"" + "factname" + "\"" + ":" + "\""
						       	+ selectedID + "\"" + "}";
        	
        	$http({
                method: 'POST',
                url: "http://localhost:8080/Facto/rest/factrest/getresponse",
                data: inputData
            }).
                success(function(data, status) {

                    if(data.status='success') {
                    	console.log(data.facts.length);
                    	$scope.factsResult=data.facts;
                        //console.log(data.results[0].label);
                        //$scope.searchResult = data.results;
                        //$location.path('/home');
                    }
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert('invalid credentials,try again!!');
                    //$location.path('/');
                });


        };

    });