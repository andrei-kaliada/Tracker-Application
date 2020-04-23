import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {


        const { data:{ confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        const modifideData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

        return modifideData;
       
    } catch (error) {
        
    }
} 

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyDate)=> ({
            confirmed:dailyDate.confirmed.total,
            deaths:dailyDate.deaths.total,
            date:dailyDate.reportDate,
        }))

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data:{countries}}  = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country) => country.name);

    } catch (error) {
        
    }
}