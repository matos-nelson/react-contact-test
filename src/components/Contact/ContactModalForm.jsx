import { Input, DatePicker } from "components/base";
import PropTypes from "prop-types";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ContactModalForm = ({
  className,
  isOpen,
  onClose,
  onChange,
  onSubmit,
  onSelection,
  data,
  errors,
}) => {
  const contactFormId = "contactForm";
  return (
    <Modal show={isOpen} onHide={onClose} className={className}>
      <Modal.Header closeButton>
        <Modal.Title>New Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id={contactFormId} onSubmit={onSubmit}>
          <Form.Group className="mb-4">
            <Form.Label htmlFor="firstName">
              <strong>First Name:</strong>
            </Form.Label>
            <Input
              autoFocus
              name="firstName"
              value={data.firstName}
              error={errors.firstName}
              onChange={onChange}
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
              value={data.lastName}
              error={errors.lastName}
              onChange={onChange}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="birthDate">
              <strong>Birth Date:</strong>
            </Form.Label>
            <DatePicker
              name="birthDate"
              value={new Date(data.birthDate)}
              onChange={(date) => onSelection(date)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address">
              <strong>Address:</strong>
            </Form.Label>
            <Input
              name="address"
              value={data.address}
              error={errors.address}
              onChange={onChange}
              type="text"
              placeholder="Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">
              <strong>Email Address:</strong>
            </Form.Label>
            <Input
              name="email"
              value={data.email}
              error={errors.email}
              onChange={onChange}
              type="text"
              placeholder="Email Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="phoneNumber">
              <strong>Phone Number:</strong>
            </Form.Label>
            <Input
              name="phoneNumber"
              value={data.phoneNumber}
              error={errors.phoneNumber}
              onChange={onChange}
              type="text"
              placeholder="Phone Number"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>
          Cancel
        </Button>{" "}
        <Button type="submit" variant="success" form={contactFormId}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ContactModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ContactModalForm;
