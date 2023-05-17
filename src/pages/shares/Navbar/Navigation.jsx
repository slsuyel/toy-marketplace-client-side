import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/styles.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { useContext } from 'react';
function Navigation() {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const logoutBtn = () => {
    logOut();
  };



  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand w-50">
          <img
            src={'https://logos-world.net/wp-content/uploads/2020/05/Huawei-Logo.jpg'}
            alt=""
            width={"170px"}
            className="img-fluid rounded-1"
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

            {user ? (
              <>

                <p
                  onClick={logoutBtn}
                  className="btn btn-info fw-semibold mb-0 mx-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Log Out
                </p>
              </>
            ) : (
              <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/login">
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
