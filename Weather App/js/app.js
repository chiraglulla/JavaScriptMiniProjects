const api_key = 'gmDftoJHYlo0ACeLAixnbGXup7xlpeeE'

const get_weather_info = async (key) => {
    const base_url = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${key}?apikey=${api_key}`

    const response = await fetch(base_url + query)
    const data = await response.json()

    return data[0]
}

const get_city_info = async (city_name) => {
    const base_url = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${api_key}&q=${city_name}`;

    const response = await fetch(base_url + query)
    const data = await response.json()
    
    return data[0]
}
