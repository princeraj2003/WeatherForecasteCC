const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '07c05c07d6msh4d8b6bfafd52f1fp1a6cbfjsn1765f358b68c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city) => {
  try {
    cityName.innerHTML = city;

    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Update your HTML elements with the received data if they exist
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
    // Handle the error here, e.g., display an error message to the user
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});

// Call getWeather initially with a default city value
getWeather('Delhi');
