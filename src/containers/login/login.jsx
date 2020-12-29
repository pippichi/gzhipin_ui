import React, { Component } from 'react'
import {NavBar, WingBlank, InputItem, List, WhiteSpace, Button} from "antd-mobile"
import Logo from '../../components/logo/logo'

import {registerAPI} from "../../api/user_api"

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    componentDidMount(){

    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    login = async() => {
        const {username, password, type} = this.state;
        const type_num = type === "dashen" ? 1 : 2
        try{
            await registerAPI({username, password, type: type_num})
            this.props.history.replace("/")
        }catch(e) {}
    }

    toRegister = () => {
        this.props.history.replace("/register")
    }

    render() {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={val => {this.handleChange("username", val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder="请输入密码" onChange={val => {this.handleChange("password", val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>

                        <Button className="myButton" type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>

                        <Button className="myButton" type="primary" onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
