// $("#section-heading").text("hello am i working?")
var selectCityForm = $("#select-city-form");
var selectCityInput = $("#select-city-input");

selectCityForm.on("submit", function(event) {
    event.preventDefault();

    // event listener for when form is submitted
    var selectedCity = selectCityInput.val();

    var endpoint = generateURL(selectedCity);
    var weatherInfo = requestCityWeather(url).then


});