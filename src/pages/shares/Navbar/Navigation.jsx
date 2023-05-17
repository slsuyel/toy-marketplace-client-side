import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/styles.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { useContext } from 'react';
import logo from '../../../assets/logo.png'
import profile from "../../../assets/profile.png";


function Navigation() {
  const { user, logOut, photo } = useContext(AuthContext);
  // console.log(photo)
  // console.log(user)
  const logoutBtn = () => {
    logOut();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand w-50">
          <img
            src={logo}
            alt=""
            width={"170px"}
            className="img-fluid rounded-1"
            draggable={false}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/">  Home   </NavLink>
            <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/blog">  Blog   </NavLink>

            <NavLink className="fs-5 text-dark mx-2 text-decoration-none"style={{ whiteSpace: "nowrap" }} to="/allToys">  All Toys   </NavLink>

            {user ? (
              <>
                <>
                  <NavLink className="fs-5 text-dark mx-2 text-decoration-none now" to="/myToy" style={{ whiteSpace: "nowrap" }}>  My Toy   </NavLink>
                  <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/addToy" style={{ whiteSpace: "nowrap" }}>  Add A Toy   </NavLink>
                  <img
                    className="border border-dark me-2 profile-pic rounded-circle"
                    src={photo ? photo : profile} alt=""
                  />
                </>
                <p
                  onClick={logoutBtn}
                  className="btn btn-info fw-semibold mb-0 mx-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Log Out
                </p>
              </>
            ) : (
              <NavLink className="fs-5 mx-2 text-decoration-none" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
