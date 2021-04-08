class Forecast {
    constructor() {
        this.api_key = 'gmDftoJHYlo0ACeLAixnbGXup7xlpeeE'
        this.weather_URI = 'https://dataservice.accuweather.com/currentconditions/v1/'
        this.city_URI = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async update_city_info(city_name) {
        const city = await this.get_city_info(city_name)
        const weather = await this.get_weather_info(city.Key)
        
        return { city, weather }
    }

    async get_weather_info(key) {
        const query = `${key}?apikey=${this.api_key}`
        const response = await fetch(this.weather_URI + query)
        const data = await response.json()

        return data[0]
    }

    async get_city_info(city_name) {
        const query = `?apikey=${this.api_key}&q=${city_name}`
        const response = await fetch(this.city_URI + query)
        const data = await response.json()
        
        return data[0] 
    }
}
