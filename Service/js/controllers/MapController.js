
mapApp.controller('MapController', ['$scope','map', '$sce', function ($scope, map, $sce) {
    $scope.changeIt = function (myCity) {
        $scope.url = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?q='+myCity+'&key=AIzaSyDvg5TpVenI6GCN3rCWwTMzw6Oy3ExXTFM');
        map(myCity).success(function(data) {
		    $scope.cityInfo = data;
		  	});
    }
}]);
