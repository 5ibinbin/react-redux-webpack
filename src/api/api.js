/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
import axios from './axios';
/**
 * 登录
 * */
export const Login = (params) => {
    return axios.request({
        url: `/security/v1/province-list`,
        method: 'get'
    })
};

export const getLogin = (params) => {
    axios.request({
        url: `sfm-web/app/weixin/fund/getProvinceList`,
        method: 'post',
        data: params
    })
};