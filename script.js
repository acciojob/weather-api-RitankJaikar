//your JS code here. If required.
const button = document.querySelector("button");
const weatherData = document.querySelector("#weatherData");

button.addEventListener("click", async function() {
	const res= await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=fa8b6b96a01db77ae3d253c0e1c9b50a");
	const resJSON= await res.json();
	console.log(resJSON.weather[0].main);
	weatherData.textContent= "Current weather in London: " + resJSON.weather[0].main;
})