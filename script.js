const button = document.querySelector("button");
const weatherData = document.querySelector("#weatherData");

button.addEventListener("click", async function () {
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=london&appid=fa8b6b96a01db77ae3d253c0e1c9b50a";

    // Make the API request
    try {
        const res = await fetch(apiUrl);
        const resJSON = await res.json();

        // Display weather information
        weatherData.textContent =
            "Current weather in London: " + resJSON.weather[0].main;
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        weatherData.textContent = "Failed to fetch weather data.";
    }
});
