var API_KEY = "4a19d991335886aa3af8b1a2b417e053";

// this is a pure function because it doesn't alter anything else on the page
function generateURL(city){
//    future proofing variable enabling the number of days forecasted to be easily changed within the scope of the API
    var NUMBER_OF_DAYS_TO_FORECAST = 5;
    return `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${NUMBER_OF_DAYS_TO_FORECAST}&appid=${API_KEY}`;
}

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

function requestCity(url){
    // callback function: when network request comes back with url, run the function below
    return fetch(url).then(function(response){
        return response.json()
    });

}