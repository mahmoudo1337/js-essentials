function showweatherDetails(event){
    event.preventDefault()
    const city = document.getElementById('city').value
const apiKey = '29726a11a2d8e364f293f81e6fa77fc2'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl).then(response=> response.json()).then(data=>{
        const weatherInfo = document.getElementById('weatherInfo')
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    }).catch(error=>{
        console.error("error fetching weather: ", error)
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    })
    
}





document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );