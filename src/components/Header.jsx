import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';

function Header() {

  const navigate = useNavigate()
  const LogoutUser = () => {
    signOut(auth).then(() => {
      toast.success('logout successfully...')
       navigate('/login')
    }).catch((error) => {
      toast.error(error.message)
    });
    
  }
  return (
    <Navbar expand="lg" className="header">

      <Container fluid>
        <Navbar.Brand href="/" className="logo">Q-link</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
             <button className="logoutbtn" onClick={LogoutUser}>Logout</button>
            
            <Link to="/register" >
              Register
            </Link>
            <Link to="/myOrders">
            MyOrders
            </Link>
            <Link to="/cart" >
               <FiShoppingCart size={24} className="cart"/><span>0</span>
            </Link>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;