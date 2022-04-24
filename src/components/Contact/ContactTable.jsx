import { DataTable } from "components/base";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const ContactTable = ({ contacts, onRowClick }) => {
  const columns = [
    {
      label: "First Name",
      selector: "firstName",
    },
    {
      label: "Last Name",
      selector: "lastName",
    },
    {
      label: "Birth Date",
      selector: "birthDate",
    },
    {
      label: "Address",
      selector: "address",
    },
    {
      label: "Email",
      selector: "email",
    },
    {
      label: "Phone Number",
      selector: "phoneNumber",
    },
  ];

  return (
    <Card>
      <Card.Header>
        <i className="fas fa-address-book" />
        <span className="pl-1">Contacts</span>
      </Card.Header>
      <Card.Body>
        <DataTable columns={columns} data={contacts} onRowClick={onRowClick} />
      </Card.Body>
    </Card>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
};

export default ContactTable;
