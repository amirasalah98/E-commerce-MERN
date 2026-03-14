import React, {useContext,useState} from 'react';
import { CartContext } from '../cartContext';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import '../App.css'
import style from './style.module.css'
import { BsSun,BsMoon,BsCartCheck,BsCartCheckFill,BsHeart ,BsHeartFill,BsPerson    } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { DarkModeContext } from '../DarkModeContext';
import {Link} from 'react-router-dom'
import Signup from './admin/signup'
import Login from './admin/login'
 const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

function CollapsibleExample({toggleTheme,theme }) {
 const {darkMode,toggleDarkMode}= useContext(DarkModeContext)
 const handleClick=()=>{
toggleDarkMode()
 }
 const {cartItems}=useContext(CartContext)
 const totalQuantity = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
); 
const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <Navbar  className={darkMode? style.containerDark:style.containerLight} collapseOnSelect expand="lg" style={{boxShadow: "rgba(33, 35, 38, 0.2) 0px 5px 7px"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">Amira's Art<br /><span style={{fontSize:"16px",fontWeight:"lighter"}}>Landescape . Mixed Media</span></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='responsive-navbar-icon'>
          <FiAlignJustify className='d-flex'/>

        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto w-25 justify-content-between">
            <Link className='d-block mx-3 text-center' to="/">Home</Link>
            <Link className='d-block mx-3 text-center' to="/shop">Shop</Link>
            <Link className='d-block mx-3 text-center' to="/about">About</Link>
            <Link className='d-block mx-3 text-center' to="/contact">Contact</Link>
          </Nav>
          <hr />
          <Nav className='d-flex flex-row justify-content-center'>
            <Nav.Link as={Link} to="/wishlist" className={style.themeBtn}>
              <BsHeart />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={`${style.themeBtn}  ${style.quantityPosition}`}>
              <BsCartCheck />
              {totalQuantity > 0 && (
    <span className={style.cartBadge}>
      {totalQuantity}
    </span>
  )}
            </Nav.Link>
             <Nav.Link onClick={handleClick}
            className={style.themeBtn} aria-label="Toggle theme">
              {darkMode? <BsSun />: <BsMoon  />}
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/admin/login" className={style.themeBtn}>
              <BsPerson  />
            </Nav.Link> */}
            {loggedInUser ? (
                <div>
                    <p>Welcome {loggedInUser}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    {/* <Signup />
                    <Login setLoggedInUser={setLoggedInUser} /> */}
                    <Nav.Link as={Link} to="/login" className={style.themeBtn}>
              <BsPerson  />
            </Nav.Link>
                </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;