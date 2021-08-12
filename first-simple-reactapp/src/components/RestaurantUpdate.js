import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            id:null,
        }
    }
    componentDidMount()
    { 

        fetch('http://localhost:3000/restList/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                 this.setState({ 
                     name:result.name,
                     email:result.email,
                     id:result.id,
                     rating:result.rating,
                     address:result.address

                  })
            })
        })
    }
    update()
    {
        fetch('http://localhost:3000/restList/'+this.state.id, {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Data has heen Updated Successfully.")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantUpdate</h1>

                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Name" value={this.state.name} /> <br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Email" value={this.state.email} /> <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Rating"  value={this.state.rating}/> <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Address"  value={this.state.address}/> <br /><br />
                    <Button variant="success" onClick={() => { this.update() }}>Submit</Button>{' '}
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;