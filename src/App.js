
import {Navbar, Nav} from 'react-bootstrap'
import Home from "./Home";
import Pricing from "./Pricing";
import Features from "./Features"
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import Navba from "./Navba"
import {BrowserRouter, Route , Switch, Link} from "react-router-dom";





function App() {
  return (
    <>
   <BrowserRouter>
   <Switch>
  
  <Route exact path="/"component={Home}/>
  <Route exact path="/Features"component={Features}/>
  <Route exact path="/Pricing"component={Pricing}/>

</Switch>    
   
   </BrowserRouter>
    
   
    </>
  );
}

export default App;

