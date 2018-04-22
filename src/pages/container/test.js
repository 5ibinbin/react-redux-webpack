/**
 * @author Nickyzhang
 * @date 2018/4/22
 * @description file templates
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, notification, message} from 'antd';
import '../login/login.less';
import  {connect} from 'react-redux';
import { getLoginInfo } from '../../actions/LoginAction';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Nicky',
            password: 'zhang'
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>贷超天玑系统test</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(Login);