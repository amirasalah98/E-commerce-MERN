import { Container, Nav, Navbar  } from 'react-bootstrap';
import '../App.css'
import style from './style.module.css'
import {Link} from 'react-router-dom'
function CollapsibleExample({toggleTheme}) {
  return (
    <Navbar collapseOnSelect expand="lg" className={style.navbar} style={{boxShadow: "rgba(33, 35, 38, 0.2) 0px 5px 7px"}}>
      <Container className=''>
        <Navbar.Brand to="/">Amira's Art<br /><span style={{fontSize:"16px",fontWeight:"lighter"}}>Landescape . Mixed Media</span></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto w-25 justify-content-between">
            <Link className='d-block' to="/">Home</Link>
            <Link className='d-block' to="/shop">Shop</Link>
            <Link className='d-block' to="/about">About</Link>
            <Link className='d-block' to="/contact">Contact</Link>
          </Nav>
          <Nav>
            <Nav.Link to="#deets">More deets</Nav.Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;