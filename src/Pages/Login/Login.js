import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../Components/CustomInput/CustomInput";

const Login = () => {
  return (
    <div>
      <Header />
      <Container fluid className="page-main">
        {" "}
        <div className="form">
          <h2>Login Admin Register</h2>
          <hr></hr>
          <Form>
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="a@a.com"
            />
            <CustomInput
              label="Password"
              type="password"
              placeholder="************"
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
