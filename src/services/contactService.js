import { contacts } from "./mockContactData";

let idIncrementor = contacts.length;

async function getContacts() {
  return contacts;
}

async function createContact(contact) {
  idIncrementor = idIncrementor + 1;
  contact.id = idIncrementor;
  contacts.push(contact);
  return contact;
}

async function update(contact) {
  const index = contacts.findIndex((c) => c.id === contact.id);
  if (index === -1) {
    throw new Error("Could not update contact");
  }

  contacts[index] = contact;

  return contact;
}

async function get(id) {
  return await contacts.find((c) => c.id === id);
}

async function deleteContact(id) {
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) {
    throw new Error("Could not delete contact");
  }

  contacts.splice(index, 1);
}

export default {
  getContacts,
  createContact,
  update,
  get,
  deleteContact,
};
