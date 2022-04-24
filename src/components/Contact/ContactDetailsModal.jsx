import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Form, Modal, Row } from "react-bootstrap";

const ContactDetailsModal = ({
  contact,
  isOpen,
  onClose,
  onDelete,
  history,
}) => {
  const handleOnEdit = () => {
    history.push("/contacts/" + contact.id);
  };

  return (
    <Modal show={isOpen} onHide={onClose} contentClassName="detail-content">
      <Modal.Header closeButton>
        <Modal.Title>
          <Row>
            <Col>
              <Button variant="link" className="p-0" onClick={handleOnEdit}>
                Edit
              </Button>
            </Col>
            <Col>
              <Button
                variant="link"
                className="p-0"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{contact && contact.firstName + " " + contact.lastName}</h2>
        <Row className="mb-3">
          <Col md="12">
            <Form.Label>Birth Date</Form.Label>
          </Col>
          <Col>
            <p>
              <strong>{contact && contact.birthDate}</strong>
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="12">
            <Form.Label>Address</Form.Label>
          </Col>
          <Col>
            <p>
              <strong>{contact && contact.address}</strong>
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="12">
            <Form.Label>Email</Form.Label>
          </Col>
          <Col>
            <p>
              <strong>{contact && contact.email}</strong>
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="12">
            <Form.Label>Phone Number</Form.Label>
          </Col>
          <Col>
            <p>
              <strong>{contact && contact.phoneNumber}</strong>
            </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

ContactDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default ContactDetailsModal;
