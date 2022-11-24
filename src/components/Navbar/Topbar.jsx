import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import { AuthContext } from '../../context/AuthContext';


function Topbar() {

  // const [img, setImg] = useState('')
  // console.log('email',email)
  // console.log('password',password)
  // console.log

  const [show, setShow] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const loginFun = () => {
    setShowLogin(!showLogin)
  }
  const loginFunClose = () => {
    setShowLogin(false)
  }

  const registerFunOpen = () => {
    setShow(!show)
  }
  const registerFunClose = () => {
    setShow(false)
  }


  const { user } = useContext(AuthContext)

  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Link to="/" className="link">
            <Navbar.Brand>Books Store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav_item">Home</Nav.Link>
              <Nav.Link href="#link" className="nav_item">Contact</Nav.Link>
              <Nav.Link href="#link" className="nav_item">About</Nav.Link>
              <Nav.Link href="#link" className="nav_item">Author</Nav.Link>


              {/* <Nav.Link href="#link" className="nav_item" onClick={loginFun}>Login</Nav.Link>
              <Nav.Link href="#link" className="nav_item" onClick={registerFunOpen}>Register</Nav.Link> */}

              {
                user ?
                  <Nav.Link href="#link" className="nav_item">{user?.username}</Nav.Link>
                  :
                  <>
                    <Nav.Link href="#link" className="nav_item" onClick={loginFun}>Login</Nav.Link>
                    <Nav.Link href="#link" className="nav_item" onClick={registerFunOpen}>Register</Nav.Link>
                  </>
              }
              {
                user ? <Nav.Link href="#link" className="nav_item">
                  <img src={user?.img} alt="user img" className="user_img" />
                </Nav.Link>
                  :
                  " "
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="form">
        {
          show ? <Register registerFunClose={registerFunClose} /> : ' '
        }
      </div>
      <div className="form">
        {
          showLogin ? <Login loginFunClose={loginFunClose} /> : ' '
        }
      </div>
    </>
  );
}

export default Topbar;