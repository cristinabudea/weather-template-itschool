function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);
  let weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = "";
  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { list } = data;
      const daysMap = {};
      list.forEach((element) => {
        const { dt } = element;
        const day = getDayOfTheWeek(dt);
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });
    });
}
