import { DatePicker, Input } from "components/base";
import { useForm } from "hooks";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { dateUtils } from "utilities";
import { contactService } from "services";
import { number, string, date } from "yup";

const ContactUpdateForm = ({ match, history }) => {
  const INITIAL_STATE = {
    id: 0,
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    address: "",
    email: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [previousFormData, setPreviousFormData] = useState(INITIAL_STATE);
  const schema = {
    id: number().integer().required(),
    firstName: string()
      .matches(/^[a-zA-Z ]{1,200}$/, `\${label} should only contain letters`)
      .required()
      .label("First Name"),
    lastName: string()
      .matches(/^[a-zA-Z ]{1,200}$/, `\${label} should only contain letters`)
      .required()
      .label("Last Name"),
    birthDate: date().required().label("Birth Date"),
    address: string().required().max(100).label("Address"),
    email: string().required().email().label("Email"),
    phoneNumber: string()
      .matches(
        /^[2-9]\d{2}-\d{3}-\d{4}$/,
        `\${label} is invalid. Should follow format: XXX-XXX-XXXX`
      )
      .label("Phone number"),
  };

  useEffect(() => {
    const fetchContact = async () => {
      const id = parseInt(match.params.id);
      const contact = await contactService.get(id);

      if (!contact || id !== contact.id) {
        history.push("/contacts");
        return;
      }

      setFormData(contact);
      setPreviousFormData(contact);
    };

    fetchContact();
  }, [history, match.params.id]);

  const handleOnSelection = (date) => {
    const data = { ...formData };

    data.birthDate = dateUtils.format(date);
    validateProperty({ name: "birthDate", value: data.birthDate });
    setFormData(data);
  };

  function cancelEdit(e) {
    e.preventDefault();

    setFormData(INITIAL_STATE);
    setPreviousFormData(INITIAL_STATE);
    history.push("/contacts");
  }

  const onSubmit = async () => {
    const data = { ...values };
    try {
      data.birthDate = dateUtils.format(values.birthDate);
      await contactService.update(data);
      setFormData(data);
      setPreviousFormData(data);
      toast.success("Contact was updated successfully!");
    } catch (ex) {
      setFormData({ ...previousFormData });
      toast.error("Could not update contact!");
    }
  };

  const { values, errors, handleOnChange, handleOnSubmit, validateProperty } =
    useForm(formData, schema, onSubmit);

  return (
    <div className="animated fadeIn">
      <Container>
        <Row>
          <Col md="9">
            <Card>
              <Card.Header>
                <strong>Contact Details</strong>
              </Card.Header>
              <Card.Body>
                <Form id="contactUpdateForm" onSubmit={handleOnSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="firstName">
                      <strong>First Name:</strong>
                    </Form.Label>
                    <Input
                      autoFocus
                      name="firstName"
                      value={values.firstName}
                      error={errors.firstName}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="lastName">
                      <strong>Last Name:</strong>
                    </Form.Label>
                    <Input
                      name="lastName"
                      value={values.lastName}
                      error={errors.lastName}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Last Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <DatePicker
                      name="birthDate"
                      value={new Date(values.birthDate)}
                      onChange={(date) => handleOnSelection(date)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="address">
                      <strong>Address:</strong>
                    </Form.Label>
                    <Input
                      name="address"
                      value={values.address}
                      error={errors.address}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Address"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="email">
                      <strong>Email:</strong>
                    </Form.Label>
                    <Input
                      name="email"
                      value={values.email}
                      error={errors.email}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="phoneNumber">
                      <strong>Phone Number:</strong>
                    </Form.Label>
                    <Input
                      name="phoneNumber"
                      value={values.phoneNumber}
                      error={errors.phoneNumber}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <React.Fragment>
                  <Button
                    type="submit"
                    form="contactUpdateForm"
                    variant="success"
                    className="float-right"
                  >
                    <span>
                      <i className="fas fa-check" /> Save Changes
                    </span>
                  </Button>
                  <Button
                    variant="light"
                    className="float-right mr-2"
                    onClick={(e) => cancelEdit(e)}
                  >
                    <span>
                      <i className="fas fa-times" /> Cancel
                    </span>
                  </Button>
                </React.Fragment>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ContactUpdateForm.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default ContactUpdateForm;
