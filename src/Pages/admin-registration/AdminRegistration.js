import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import CustomInput from "../../Components/CustomInput/CustomInput";

const AdminRegistration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm();
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
