import axios from 'axios';
import { JsonMock } from './mockData';

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
        return JsonMock;
      }
}