import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

import {
    Link, 
  } from 'react-router-dom'

class RestauranstList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({list:result})
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
                        <td><Link to={'/update/' + data.id}>update</Link></td>
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