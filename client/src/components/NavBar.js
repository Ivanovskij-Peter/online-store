import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ textDecoration: "none" }}>
          Online Store
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history(ADMIN_ROUTE)}
            >
              Admin Panel
            </Button>
            <Button
              variant={"outline-light"}
              className="ms-4"
              onClick={() => logOut()}
            >
              Log Out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history(LOGIN_ROUTE)}
            >
              Autorize
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
