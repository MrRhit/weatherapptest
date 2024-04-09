const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cdb7c2630bmshd8602546ab7dd98p172e4ajsnf9b616686084',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
       cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        temp3.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        feels_like3.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        humidity3.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset

		let sec = sunset;
		let date = new Date(sec * 1000);
		let timeStr = `${date.getHours()}:${date.getMinutes()}`;

		function time_convert(num) { 
			const hours = Math. floor(num / 60); 
			const minutes = num % 60; 
			return `${hours}:${minutes}`;
		 }
	
		 console.log(time_convert(1675));
	})


	.catch (err => console.error(err));

}

submit.addEventListener("click", (e)=>{
     e.preventDefault()
	getWeather(city.value);
})

getWeather("Delhi");

function newDate() {
	let setDate = new Date().toLocaleString();
	console.log(setDate);
}

newDate();

 
