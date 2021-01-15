$(document).ready(function () { 

var cityName = "Chicago"
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&appid=dbd621af5e56c8b5d03ec848cc0b32ea";

function cityWeather() {

  cityName = $("#city-input").val().trim();
  queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&appid=dbd621af5e56c8b5d03ec848cc0b32ea";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $(".weatherDetails1").text("City: " + response.city.name);
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".weatherDetails2").text("Temperature: " + response.list[0].main.temp + " °");
    $(".weatherDetails3").text("Humidity: " + response.list[0].main.humidity + "%");
    $(".weatherDetails4").text("Wind Speed: " + response.list[0].wind.speed + "mph");
    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#weatherIcon').attr('src', iconurl);
  })
}

function cityFiveDayWeather() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)


    $(".weatherDetails7").text(moment().add(1, 'd').format("dddd, MMMM Do"));
    $(".weatherDetails8").text("Temp: " + response.list[0].main.temp + " °");
    $(".weatherDetails9").text("Humidity: " + response.list[0].main.humidity + "%");
    var iconcode1 = response.list[0].weather[0].icon;
    var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
    $('#weatherIcon1').attr('src', iconurl1);

    $(".weatherDetails10").text(moment().add(2, 'd').format("dddd, MMMM Do"));
    $(".weatherDetails11").text("Temp: " + response.list[8].main.temp + " °");
    $(".weatherDetails12").text("Humidity: " + response.list[8].main.humidity + "%");
    var iconcode2 = response.list[8].weather[0].icon;
    var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
    $('#weatherIcon2').attr('src', iconurl2);

    $(".weatherDetails13").text(moment().add(3, 'd').format("dddd, MMMM Do"));
    $(".weatherDetails14").text("Temp: " + response.list[16].main.temp + " °");
    $(".weatherDetails15").text("Humidity: " + response.list[16].main.humidity + "%");
    var iconcode3 = response.list[16].weather[0].icon;
    var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
    $('#weatherIcon3').attr('src', iconurl3);

    $(".weatherDetails16").text(moment().add(4, 'd').format("dddd, MMMM Do"));
    $(".weatherDetails17").text("Temp: " + response.list[24].main.temp + " °");
    $(".weatherDetails18").text("Humidity: " + response.list[24].main.humidity + "%");
    var iconcode4 = response.list[24].weather[0].icon;
    var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
    $('#weatherIcon4').attr('src', iconurl4);

    $(".weatherDetails19").text(moment().add(5, 'd').format("dddd, MMMM Do"));
    $(".weatherDetails20").text("Temp: " + response.list[32].main.temp + " °");
    $(".weatherDetails21").text("Humidity: " + response.list[32].main.humidity + "%");
    var iconcode5 = response.list[32].weather[0].icon;
    var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
    $('#weatherIcon5').attr('src', iconurl5);

    var here = response.city.coord.lat;
    var there = response.city.coord.lon;


    function callUVIndex() {

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi?lat="+here+"&lon="+there+"&appid=dbd621af5e56c8b5d03ec848cc0b32ea",
        method: "GET"
      }).then(function (response) {
        console.log(response)

        var index = response.value
        $(".UV1").text("UV Index: " + index);


      }
      )
    }
    callUVIndex();
    })
  }

    $('.citySearch').on("click", cityFiveDayWeather);
    $('.citySearch').on("click", cityWeather);
    $(".citySearch").on("click", function () {

      var silly = $(this).siblings("#city-input").val();
      var goose = $(this).parent().attr("id");
      localStorage.setItem(goose, silly);
      $(".recentSearch").append(silly, "")

    }
    )



 
  

})