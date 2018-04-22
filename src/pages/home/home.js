/**
 * @author Nickyzhang
 * @date 2018/4/21
 * @description file templates
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Menu, Modal, Layout, Breadcrumb, Icon, Button, Avatar} from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
import './home.less';
import Test from '../container/test';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            collapsed: false,
            title: '总体数据',
            subTitle: '渠道数据',
        }
    }

    render() {
        return (
            <Form>
                <Layout className="home">
                    <Menu
                        theme="dark"
                        mode="inline"
                        className="home-left">
                        <SubMenu key="总体数据" title={<span><Icon type="setting"/><span>总体数据</span></span>}>
                            <Menu.Item key="总体数据"><Link to='/home/test'>总体数据</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="渠道数据" title={<span><Icon type="setting"/><span>渠道数据</span></span>}>
                            <Menu.Item key="渠道明细"><Link to='/home/test'>渠道明细</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                    <Layout className="home-right">
                        <Breadcrumb style={{background: '#fff', padding: '20px 16px', marginBottom: '20px'}}>
                            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.subTitle}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            <Switch>
                                <Route path="/home/test" component={Test}/>
                            </Switch>
                        </Content>
                        <Footer className="footer">
                            Copyright © 2017 后台管理系统
                        </Footer>
                    </Layout>
                </Layout>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}

const HomeLayout = Form.create()(Home);

export default connect(mapStateToProps)(HomeLayout);