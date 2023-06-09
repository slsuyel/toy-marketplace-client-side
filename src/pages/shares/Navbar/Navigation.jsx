
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/styles.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { useContext } from 'react';
import logo from '../../../assets/logo.png'
import profile from "../../../assets/profile.png";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Navigation() {
  const { user, logOut, photo, name } = useContext(AuthContext);
  const logoutBtn = () => {
    logOut();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     {name}
    </Tooltip>
  );



  return (
    <header>
      <Navbar expand="lg" style={{ background: "#295a411c", padding: '0px 10px' }}>
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
              navbarScroll
            >
              <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/">  Home   </NavLink>
              <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/blog">  Blog   </NavLink>

              <NavLink className="fs-5 text-dark mx-2 text-decoration-none" style={{ whiteSpace: "nowrap" }} to="/allToys">  All Toys   </NavLink>

              {user ? (
                <>
                  <>
                    <NavLink className="fs-5 text-dark mx-2 text-decoration-none now" to="/mytoys" style={{ whiteSpace: "nowrap" }}>  My Toy   </NavLink>
                    <NavLink className="fs-5 text-dark mx-2 text-decoration-none mb-2" to="/addToy" style={{ whiteSpace: "nowrap" }}>  Add A Toy   </NavLink>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <img
                        className="border border-dark me-2 profile-pic rounded-circle"
                        src={photo ? photo : profile}
                        alt=""

                      />
                    </OverlayTrigger>
                  </>
                  <p
                    onClick={logoutBtn}
                    className="btn btn-info fw-semibold mb-0 mx-1 mt-sm-1 mt-2"
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
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </header>
  );
}

export default Navigation;
