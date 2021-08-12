import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseDamage, faListOl,  faPlusSquare, faUser, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
export default class NavBarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="md">
                    <Container>
                        <Navbar.Brand href="#home" text="light">React Web App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><NavLink className="text-decoration-none" to="/"><FontAwesomeIcon icon={faHouseDamage} />Home</NavLink></Nav.Link>
                            <Nav.Link href="#link"> <NavLink className="text-decoration-none" to="/list"><FontAwesomeIcon icon={faListOl} />List</NavLink></Nav.Link>
                            <Nav.Link href="#home"><NavLink className="text-decoration-none" to="/create"><FontAwesomeIcon icon={faPlusSquare} />Create</NavLink></Nav.Link>
                            <Nav.Link href="#link"><NavLink className="text-decoration-none" to="/search">< FontAwesomeIcon icon={faSearchLocation} />Search</NavLink></Nav.Link>
                            {/* <Nav.Link href="#home"><NavLink className="text-decoration-none" to="/login">< FontAwesomeIcon icon={faUser} />Login</NavLink></Nav.Link> */}
                            {
                                localStorage.getItem('login') ?
                                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout </Link></Nav.Link>
                                :
                                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login </Link></Nav.Link>
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
