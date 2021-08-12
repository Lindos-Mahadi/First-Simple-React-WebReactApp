import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
import NavBarManu from './NavBarManu'
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
        }
    }
    create() {
        fetch('http://localhost:3000/restList', {
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Data has heen added successfully.")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Restaurant Create</h1>

                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Name" /> <br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Email" /> <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Rating" /> <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Address" /> <br /><br />
                    <Button variant="success" onClick={() => { this.create() }}>Submit</Button>
                </div>

            </div>
        );
    }
}

export default RestaurantCreate;