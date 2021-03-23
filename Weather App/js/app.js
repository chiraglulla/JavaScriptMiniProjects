const api_key = 'CqkNBjmSKFeL5Wt2TyLXPNSAlWtBwkbj'

const get_weather_info = async (key) => {
    const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${key}?apikey=${api_key}`

    const response = await fetch(base_url + query)
    const data = await response.json()

    console.log(data)
}

const get_city_info = async (city_name) => {
    const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${api_key}&q=${city_name}`;

    const response = await fetch(base_url + query)
    const data = await response.json()
    
    return data[0]
}

get_city_info('mumbai')
    .then(data => console.log(data))
    .catch(err => console.log(err))
