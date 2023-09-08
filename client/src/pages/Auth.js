import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      history(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h3 className="m-auto "> {isLogin ? "Login" : "Signup"}</h3>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="false"
          />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Don't have an account?&nbsp;
                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?&nbsp;
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={handleClick}>
              {isLogin ? "Log In" : "Sigup"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
