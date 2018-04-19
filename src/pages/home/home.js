/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
import React, {Component} from 'react';
import logo from '../../assets/libs/logo.svg';
import './home.css';
import  {connect} from 'react-redux';
import { getLoginInfo } from '../../actions/LoginAction';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Nicky',
            password: 'zhang'
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro" onClick={() => this.click()}>
                    Home <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }

    click = () =>{
        const {dispatch} = this.props;
        let params = {
            username: this.state.username,
            password: this.state.password
        };
        dispatch(getLoginInfo(params))
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(Home);