function displayCurrentWeather(city) {
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { name, dt, main, weather, wind } = data;
      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));
      console.log(day);
      console.log(hours);
      console.log(temperature);
      console.log(realFeel);
      console.log(weatherDescription);
      console.log(weatherIcon);
      console.log(windSpeed);
    });
}

displayCurrentWeather("Sibiu");
