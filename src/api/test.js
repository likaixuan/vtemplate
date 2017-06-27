
import axios from 'axios';


/**
 *
 *
 * @example
 * import {test} from "xxxxxxx.js"
 * let params = {xxx:'xxx'}
 * test(params).then((res) =>{
 * },(error) =>{
 * })
 * 
 */
export const test = params => {
    return axios.post("http://www/xxx/com", params);
};