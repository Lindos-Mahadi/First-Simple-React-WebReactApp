import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfo, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
class RestaurantList extends Component {
    constructor() {
        super();
        this.state ={
            list: null,
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/restList").then((response) =>{
            response.json().then((result)=>{
                // console.log(result);
                this.setState({list:result})
            })
        })
    }

    render() {
        return (
            <div>
                <h1>RestaurantList</h1>
                {
                    this.state.list?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Address</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            this.state.list.map((item,i)=>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td ><Link to={"/update/"+item.id}>
                                        <FontAwesomeIcon icon={faEdit} color="yellow" style={{fontSize: "25px", marginRight: "10px"}} />
                                        </Link>

                                        <Link to={"/update/"+item.id}>
                                        <FontAwesomeIcon icon={faInfo} color="black" style={{fontSize: "25px", marginRight: "10px"}}/>
                                        </Link>

                                        <Link to={"/update/"+item.id}>
                                        <FontAwesomeIcon icon={faTrash} color="red" style={{fontSize: "25px"}} />
                                        </Link>

                                        </td>
                                </tr>
                            )
                            
                        }
                        </tbody>
                        </ Table>
                    </div>
                    :<p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestaurantList;