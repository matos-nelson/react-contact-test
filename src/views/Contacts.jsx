import {
  ContactDetailsModal,
  ContactModalForm,
  ContactTable,
} from "components/Contact";
import { useForm } from "hooks";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Row } from "react-bootstrap";
import { contactService } from "services";
import { dateUtils } from "utilities";
import { string, date } from "yup";

const Contacts = ({ history, ...props }) => {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    address: "",
    email: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [contacts, setContacts] = useState([]);
  const [showAddContactForm, setshowAddContactForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [contactToShow, setContactToShow] = useState({});

  const schema = {
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
    const fetchContacts = async () => {
      try {
        const contacts = await contactService.getContacts();
        setContacts(contacts);
      } catch {}
    };

    fetchContacts();
  }, []);

  const showModal = () => {
    setshowAddContactForm(true);
  };

  const handleClose = () => {
    setshowAddContactForm(false);
    setShowDetailModal(false);
    setContactToShow({});
    setFormData(INITIAL_STATE);
  };

  const handleRowClick = (objectToShow) => {
    setShowDetailModal(true);
    setContactToShow(objectToShow);
  };

  const handleOnSelection = (date) => {
    const data = { ...values };

    data.birthDate = dateUtils.format(date);
    validateProperty({ name: "birthDate", value: data.birthDate });
    setFormData(data);
  };

  const handleOnDelete = async (id) => {
    try {
      await contactService.deleteContact(id);
      history.push("/contacts");
      handleClose();
      toast.success("Successfully deleted contact!");
    } catch {
      toast.error("Could not delete contact!");
    }
  };

  const onSubmit = async () => {
    try {
      const newContact = { ...values };
      newContact.birthDate = dateUtils.format(values.birthDate);
      await contactService.createContact(newContact);

      const contacts = await contactService.getContacts();
      setContacts([...contacts]);
      handleClose();
      toast.success("A new contact was successfully added!");
    } catch {}
  };

  const { values, errors, handleOnChange, handleOnSubmit, validateProperty } =
    useForm(formData, schema, onSubmit);

  return (
    <div className="animated fadeIn">
      <Container>
        <Row>
          <Col md="12">
            <ContactDetailsModal
              isOpen={showDetailModal}
              onClose={handleClose}
              onDelete={handleOnDelete}
              contact={contactToShow}
              history={history}
              {...props}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <ContactModalForm
              isOpen={showAddContactForm}
              onSubmit={handleOnSubmit}
              onClose={handleClose}
              onChange={handleOnChange}
              onSelection={handleOnSelection}
              data={values}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Button
              id="btn-add"
              variant="danger"
              className="btn-pill float-right mb-2"
              onClick={showModal}
            >
              <span>
                <i className="fas fa-plus" />
                &nbsp;Add Contact
              </span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <ContactTable contacts={contacts} onRowClick={handleRowClick} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
