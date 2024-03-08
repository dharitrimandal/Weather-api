function weatherdetails(){
   let name=document.getElementById("search").value; 
$.ajax({
   url: "https://api.openweathermap.org/data/2.5/weather",
   method: "GET",
   data: { "q": name, "appid": "a2cdfdc4f0dde6667c7bbeddec55f6f3", "units": "metric" },
   success: function (response) {
      document.getElementById("temp").innerHTML = (response.main.temp)+"°c";
      document.getElementById("humid").innerHTML = (response.main.humidity)+"%";
      document.getElementById("windspeed").innerHTML = (response.wind.speed)+"km/h";
      document.getElementById("country").innerHTML = (response.name);
      var var1 = response.weather[0].main
      if (var1 == "Mist") {
         document.getElementById("images").src = "./images/mist.png"
      }
      if (var1 == "Clear") {
         document.getElementById("images").src = "./images/clear.png"
      }
      if (var1 == "Clouds") {
         document.getElementById("images").src = "./images/clouds.png"
      }
      if (var1 == "Drizzle") {
         document.getElementById("images").src = "./images/drizzle.png"
      }
      if (var1 == "Rain") {
         document.getElementById("images").src = "./images/rain.png"
      }
      if (var1 == "Snow") {
         document.getElementById("images").src = "./images/snow.png"
      }
      else {
         document.getElementById("images").innerHTML = var1
      }
   }
})
}