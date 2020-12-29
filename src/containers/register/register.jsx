import React, { Component } from 'react'
import {NavBar, WingBlank, InputItem, List, WhiteSpace, Radio, Button} from "antd-mobile"
import Logo from '../../components/logo/logo'

import {registerAPI} from "../../api/user_api"

const ListItem = List.Item

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        confirm_password: '',
        type: 'dashen'
    }

    componentDidMount(){

    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    register = async() => {
        const {username, password, type} = this.state;
        const type_num = type === "dashen" ? 1 : 2
        try{
            await registerAPI({username, password, type: type_num})
            this.props.history.replace("/")
        }catch(e) {}
    }

    toLogin = () => {
        this.props.history.replace("/login")
    }

    render() {
        const {type} = this.state
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
                        <InputItem type="password" placeholder="确认密码" onChange={val => {this.handleChange("confirm_password", val)}}>确认密码：</InputItem>
                        <ListItem>
                            <span>用户类型：</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={type === "dashen" ? true: false} onChange={() => {this.handleChange("type", "dashen")}}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === "laoban" ? true: false} onChange={() => {this.handleChange("type", "laoban")}}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>

                        <Button className="myButton" type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>

                        <Button className="myButton" type="primary" onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
