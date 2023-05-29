const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

/* updateCurrentCity("Timișoara"); */

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
}

/* updateWeather("Oradea"); */

bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
