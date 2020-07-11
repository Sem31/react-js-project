import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu'

class RestauranstUpdate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            address:null,
            rating:null,
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((respo)=>
        respo.json().then((res)=>{
            console.log(res)
            this.setState({
                name:res.name,
                address:res.address,
                rating:res.rating,
            })
        })
        )
    }

    update()
    {
        console.log(this.state)
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id,{
            method:'put',
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
            <NavbarMenu/>
                <h1>RestauranstUpdate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name: event.target.value})}}
                    placeholder="rasto name" value={this.state.name}/><br></br>
                    <input onChange={(event)=>{this.setState({address: event.target.value})}} 
                    placeholder="rasto address" value={this.state.address}/><br></br>
                    <input onChange={(event)=>{this.setState({rating: event.target.value})}} 
                    placeholder="rasto rating" value={this.state.rating}/><br></br>
                    <button onClick={()=>{this.update()}}>update</button>
                </div>
            </div>
        );
    }
}

export default RestauranstUpdate;