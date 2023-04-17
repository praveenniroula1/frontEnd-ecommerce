import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Alert, Button, Container, Form } from "react-bootstrap";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { postUser } from "../../Components/Helpers/axiosHelper";

const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password did not match");
    }
    const result = await postUser(rest);
    setResponse(result);
  };

  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Jhon",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Doe",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "a@a.com",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "1 geroge Street Adelaide",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "******",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "******",
    },
  ];

  return (
    <div>
      <Header />

      <Container fluid className="page-main">
        <div className="form1">
          <Form onSubmit={handleOnSubmit}>
            <h2>New Admin Register</h2>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
            <hr />
            <div className="form2">
              {" "}
              {fields.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <Button type="submit" className="fs-2 mb-2">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminRegistration;
