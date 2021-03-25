const change_location_form = document.querySelector('.change-location')
const card = document.querySelector('.card')
const detail = document.querySelector('.details')
const timeImage = document.querySelector('body > div > div > img')
const iconImage = document.querySelector('.icon img')

const updateUI = function(data){
    //object destructuring in action
    const { city, weather } = data

    detail.innerHTML = `
        <h5 class="my-3">${city.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div> 
    `

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

    let imgSrc = null
    if(weather.IsDayTime)
        imgSrc = './imgs/day.svg'
    else
        imgSrc = './imgs/night.svg'

    timeImage.setAttribute('src', imgSrc)

    const iconSrc = `./imgs/icons/${weather.WeatherIcon}.svg`
    iconImage.setAttribute('src', iconSrc)
    }

const update_city_info = async function(city_name) {

    const city = await get_city_info(city_name)
    const weather = await get_weather_info(city.Key)
    
    return { city, weather }
}

change_location_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let city_name = change_location_form.city.value.trim()
    change_location_form.reset()

    update_city_info(city_name)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
})