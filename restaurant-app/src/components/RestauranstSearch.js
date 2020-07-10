import React, { Component } from 'react';

class RestauranstSearch extends Component {

    constructor()
    {
        super()
        this.state={
            searchData:null,
            noData:null,
        }
    }
    search(key)
    {
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
                <h1>RestauranstSearch</h1>
                <input type='text' onChange={(event)=>this.search(event.target.value)}/>
                {
                    this.state.searchData?
                    <div>
                        {
                            this.state.searchData.map((item)=>
                        <div>{item.name}</div>
                            )
                        }
                    </div>
                    :""
                }
                {
                    this.state.noData?<h3>No Data Found</h3>:""
                }
            </div>
        );
    }
}

export default RestauranstSearch;