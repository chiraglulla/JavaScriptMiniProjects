const change_location_form = document.querySelector('.change-location')

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
        .then(data => console.log(data))
        .catch(err => console.log(err))
})