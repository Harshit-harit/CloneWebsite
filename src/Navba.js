
import {Navbar, Nav} from 'react-bootstrap'
import Home from "./Home";
import Pricing from "./Pricing";
import Features from "./Features"
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import {BrowserRouter, Route , Switch, Link} from "react-router-dom";




function Navba() {
    return (

      <>

      
      <Navbar bg="white" variant="dark">
      <Nav.Link>
    <Navbar.Brand Link to="Home"><img src='./images/logo.png' alt="company_logo" height="60" /></Navbar.Brand>
    </Nav.Link>
    <Nav className="mr-auto">
      <Nav.Link>
      <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/features">Features</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/pricing">Pricing</Link>
      </Nav.Link>
      </Nav>
 
    
  </Navbar>
   
  
  </>

  
        
            
  
    )
}

export default Navba;

      