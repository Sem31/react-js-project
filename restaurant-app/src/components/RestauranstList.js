import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

import {
    Link, 
  } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
class RestauranstList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({list:result})
            })
        })
    }
    delete(id){
        console.log(this.state)
        fetch("http://localhost:3000/restaurant/"+id,{
            method:'delete',
            headers:{
                Accept: 'application/json',
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                this.getData()
            })
        })
    }
    render() {

        console.log(this.state.list)
        return (
            <div>
                <h1>RestauranstList</h1>
                {/* if and else case */}

                {
                    this.state.list ?
                    <div>


        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Address</th>
                <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.list.map((data,i) => 
                    <tr>
                    <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.rating}</td>
                        <td>{data.address}</td>
                        <td><Link to={'/update/' + data.id}><FontAwesomeIcon icon={faEdit} /></Link>
                        <span onClick={()=>{this.delete(data.id)}}><FontAwesomeIcon icon={faTrash} /></span></td>
                    </tr>)
                }
            </tbody>
            </Table>

        </div>
        :<p>Please wait a while</p>
        }

        </div>
        );
    }
}

export default RestauranstList;