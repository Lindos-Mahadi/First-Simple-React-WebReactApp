import React, { Component } from 'react';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state ={
            list: null,
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/resList").then((response) =>{
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
                        {
                            this.state.list.map((item,i)=>
                            <div className="list-wrapper">
                                <span>{item.name}</span>
                                <span>{item.email}</span>
                                <span>{item.rating}</span>
                                <span>{item.address}</span>

                            </div>)
                        }
                    </div>
                    :<p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestaurantList;