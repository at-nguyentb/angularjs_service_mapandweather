
mapApp.factory('map', function ($http) { 
  return function(myCity){
       return $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?q='+myCity+',&appid=51f3a0c614b96c61e7ab11a87274a76b',
         	params: { myCity: myCity }
       });

  }
});
