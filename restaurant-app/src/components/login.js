import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

import NavbarMenu from './NavbarMenu'
class login extends Component {
    constructor()
    {
        super();
        this.state = {
            username:'',
            password:'',
        }
    }
    login()
    {
        console.log(this.state)
        fetch("http://localhost:3000/login/?q="+this.state.username).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                if(resp.length>0)
                {

                    console.log(this.props)
                    localStorage.setItem('login',JSON.stringify(resp))
                    // this is for redirecting page to another url
                    console.log(this.props.history.push('list')) 
                }
                else
                {
                    alert("check username and password")
                }
            })
        })
    }
    render() {
        return (
            <div>
            <NavbarMenu/>
            <Container>
                <h1>Login</h1>
                <input type='text' name='user' onChange={(event)=>{this.setState({username:event.target.value})}} placeholder='username'/><br></br>
                <input type='password' name='pass' onChange={(event)=>{this.setState({password:event.target.value})}} placeholder='password'/><br></br>
                <button onClick={()=>{this.login()}}>Login</button>
            </Container>
            </div>
        );
    }
}

export default login;