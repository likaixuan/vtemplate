
import ajax from './';


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
    return ajax.post("xxxxxxx", params);
};