
import axios from 'axios'
const API_BASE_ADDRESS = 'https://xebiascart.herokuapp.com/products';
export default class Api {
    //    static getUsers() {
    //        const uri = API_BASE_ADDRESS;
    //        return axios(uri, {
    //            method: 'GET'
    //        });
    //    }

    static getUsers() {
        return axios(API_BASE_ADDRESS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response)
            .then(json => json)
            .catch((error) => { throw error })
    }
}
