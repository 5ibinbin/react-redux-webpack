/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, notification, message} from 'antd';
import './login.less';
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
        const {getFieldProps} = this.props.form;
        return (
            <div className="login">
                <div className="loginTitle">贷超天玑系统</div>
                <Form onSubmit={this.handleSubmit} className="loginForm">
                    <FormItem>
                        <Input className="loginFormInput" prefix={<Icon type="user" className="loginFormIcon"/>}
                               placeholder="请输入用户名"
                               {...getFieldProps('userName')}/>
                    </FormItem>
                    <FormItem>
                        <Input className="loginFormInput" prefix={<Icon type="lock" className="loginFormIcon"/>}
                               type="password"
                               placeholder="请输入密码"
                               {...getFieldProps('password')}/>
                    </FormItem>
                    <FormItem>
                        <Checkbox
                            {...getFieldProps('checked', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })}>记住密码</Checkbox>
                    </FormItem>
                    <Button loading={this.state.loading} type="primary"
                            htmlType="submit" className="loginBtn">
                        登录
                    </Button>
                </Form>
            </div>
        );
    }
    /**
     * 登录
     * */
    handleSubmit = (e) => {
        e.preventDefault();
        const {userName, password, checked} = this.props.form.getFieldsValue();
        console.log(this.props.form.getFieldsValue());
        if(!userName){
            message.info('请输入用户名');
            return;
        }
        if(!password){
            message.info('请输入密码');
            return;
        }
        this.props.history.push('/home');
    };

    click = () =>{
        const {dispatch} = this.props;
        let params = {
            username: this.state.username,
            password: this.state.password
        };
        dispatch(getLoginInfo(params));

        this.props.history.push('/home');
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {};
}

const LoginForm = Form.create()(Login);

export default connect(mapStateToProps)(LoginForm);