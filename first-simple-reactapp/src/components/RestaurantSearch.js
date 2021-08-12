import React, { Component } from 'react';
import { Table,Form,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfo, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBarManu from './NavBarManu'

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
        }
    }
    search(key) {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restList?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})

                }
            })
        })
    }
    delete(id)
    {
        fetch('http://localhost:3000/restList/'+id,
        {
            method: "DELETE",
            // headers:{
            //     'Content-Type':'application/json'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has heen Delete")
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            
            <div>
                <NavBarManu />
                <Container>
                <h1>Restaurant Search</h1>

                <Form.Control type="text"  onChange={(event) => this.search(event.target.value)}   placeholder="Search restaurant" />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                this.state.searchData.map((item, i)=>
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

                                            <Link onClick={()=>this.delete(item.id)}>
                                            <FontAwesomeIcon icon={faTrash} color="red" style={{fontSize: "25px"}} />
                                            </Link>

                                        </td>
                                    </tr>
                                    )
                            }
                            </tbody>
                            </Table>
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>:null
                    } 
                </div>

            </Container>
            </div>
        );
    }
}

export default RestaurantSearch;