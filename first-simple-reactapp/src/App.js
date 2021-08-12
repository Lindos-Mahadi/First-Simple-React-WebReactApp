import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseDamage, faListOl,  faPlusSquare, faSearchLocation } from '@fortawesome/free-solid-svg-icons'

import Home from "./components/Home"
import RestaurantUpdate from "./components/RestaurantUpdate"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestauranstList from "./components/RestaurantList"


function App() {
  return (
    <div className="App">
      <Router>
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
            {/* <Nav.Link href="#home"><NavLink className="text-decoration-none" to="/details">Details</NavLink></Nav.Link> */}
            {/* <Nav.Link href="#link"><NavLink className="text-decoration-none" to="/update">Update</NavLink></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <RestauranstList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route path="/update/:id"
        render={props=>(
      <RestaurantUpdate {...props} />
        )}
        >
        </Route>

      </Router>
    </div>
  );
}

export default App;
