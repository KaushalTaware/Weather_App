


const API_Key = `b90b18a4c25909dc016ce9244345cd82`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (city) => {
    weather.innerHTML=`<h2> Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)

}
const showWeather = (data) => {
    if(data.cod ==404){
        weather.innerHTML=`<h2> City Not Found</h2>`
    }
    weather.innerHTML = `
    <div style="height: 100px;">
    
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
     <div><p><b>${data.main.temp} °C </b>

         </p>
        <h4>${data.weather[0].main}</h4></div>
    </div>`

}
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
