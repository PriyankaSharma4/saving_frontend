import { authHeader } from '../_helpers';
 import {config} from '../config/config'
import axios from 'axios';
export const userService = {
    login,
    sign_up,
    get_all_goals
       

};
var configheaders = {
    headers: authHeader()
    }
function sign_up(params) {
    let url =  `${config.userApi}/auth/signup`;
    return axios.post(url,params,configheaders)
}

function login(params) {
    let url =  `${config.userApi}/auth/login`;
    return axios.post(url,params,configheaders)
}

function get_all_goals() {
    let url =  `${config.userApi}/goals`;
    return axios.get(url,configheaders)

}

