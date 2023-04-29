import React from "react";
import { useAppContext } from "../appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// Components
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FixedNavSpacer, ToggleSwitch } from "./globalStyledComponents";
// Images
import Logo from "../images/logo.svg";

export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="https://mikeyhuber.me/">
            <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to={"Home"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"About"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  About Me
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Skills"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Skills
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Projects"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Contact"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    More
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/All-Projects");
                        closeExpanded();
                      }}
                    >
                      All Projects
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/My-Story");
                        closeExpanded();
                      }}
                    >
                      My Story
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
            <Nav>
              <ToggleSwitch />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
