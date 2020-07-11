import React, { Component } from 'react';
import { Table,Form,Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavbarMenu from './NavbarMenu'
class RestauranstSearch extends Component {

    constructor()
    {
        super()
        this.state={
            searchData:null,
            noData:null,
            lastSearch:null,
        }
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
                alert("item delete")
                this.search(this.state.lastSearch)
            })
        })
    }
    search(key)
    {
        this.setState({lastSearch:key})
        console.log(this.state)
        fetch("http://localhost:3000/restaurant/?q="+key).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp})
                }
                else
                {
                    this.setState({noData:true})
                }
            })
        })
    }

    render() {
        return (
            <div>
            <NavbarMenu/>
            <Container>
                <h1>RestauranstSearch</h1>
                <Form.Control type="text"  onChange={(event)=>this.search(event.target.value)} placeholder="Search" />
                {
                    this.state.searchData?
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
                            this.state.searchData.map((data,i) => 
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
                    :""
                }
                {
                    this.state.noData?<h3>No Data Found</h3>:""
                }
            </Container>
            </div>
        );
    }
}

export default RestauranstSearch;