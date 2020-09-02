import axios from 'axios';

const urlBase = "https://api.koibanx.com"

export const getStores = async (query) => {
    try {
        const options = {
            method: 'GET',
            url: `${urlBase}/stores?q={${query}}`
        };
        console.log(`${urlBase}/stores?q=`+JSON.stringify(query))
        let response = await axios(options)
        return response.data;
      } catch (error) {
            console.log(error);
      }
}

export const getStoresMock = async () => {
    try {
        const options = {
            method: 'GET',
            url: `https://run.mocky.io/v3/ebddfcdf-c468-4abd-8994-5eba7651d0e1`
        };
        let response = await axios(options)
        return response.data;
      } catch (error) {
            console.log(error);
      }
}