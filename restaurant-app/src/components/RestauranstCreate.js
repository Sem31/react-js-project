import React, { Component } from 'react';

class RestauranstCreate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            address:null,
            rating:null,
        }
    }
    create(){
        console.log(this.state)
        fetch("http://localhost:3000/restaurant",{
            method:'post',
            headers:{
                Accept: 'application/json',
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestauranstCreate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name: event.target.value})}}
                    placeholder="rasto name"/><br></br>
                    <input onChange={(event)=>{this.setState({address: event.target.value})}} 
                    placeholder="rasto address"/><br></br>
                    <input onChange={(event)=>{this.setState({rating: event.target.value})}} 
                    placeholder="rasto rating"/><br></br>
                    <button onClick={()=>{this.create()}}>Add Data</button>
                </div>
            </div>
        );
    }
}

export default RestauranstCreate;