import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

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
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/details">Details</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
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
        <Route path="/update">
          <RestaurantUpdate />
        </Route>

      </Router>
    </div>
  );
}

export default App;
