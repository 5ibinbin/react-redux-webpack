/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */

import axios from 'axios';
import {DEV_URL} from '../utils/constant';

const request = (options) => {

    return new Promise((resolve, reject) =>{
        let instance = axios.create({
            timeout: 20000, // 超时
            baseURL: DEV_URL,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
        instance(options)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })
};

export default {
    request: request
};