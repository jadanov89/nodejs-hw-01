// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, "db", "contacts.json");

// async function listContacts() {
//   try {
//     const { nanoid } = await import("nanoid");
//     const list = await fs.readFile(contactsPath, "utf-8");
//     return JSON.parse(list);
//   } catch (error) {
//     throw error;
//   }
// }

// async function getContactById(contactId) {
//   try {
//     const { nanoid } = await import("nanoid");
//     const list = await listContacts();
//     const contact = list.find((elem) => elem.id === contactId);
//     return contact || null;
//   } catch (error) {
//     throw error;
//   }
// }

// async function removeContact(contactId) {
//   try {
//     const { nanoid } = await import("nanoid");
//     const list = await listContacts();
//     const index = list.findIndex((elem) => elem.id === contactId);
//     if (index === -1) {
//       return null;
//     }
//     const [contact] = list.splice(index, 1);
//     await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
//     return contact;
//   } catch (error) {
//     throw error;
//   }
// }

// async function addContact(name, email, phone) {
//   try {
//     const { nanoid } = await import("nanoid");
//     const list = await listContacts();
//     const contact = { id: nanoid(), name, email, phone };
//     list.push(contact);
//     await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
//     return contact;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = { listContacts, getContactById, removeContact, addContact };

const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const list = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(list);
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const list = await listContacts();
    const contact = list.find((elem) => elem.id === contactId);
    return contact || null;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const list = await listContacts();
    const index = list.findIndex((elem) => elem.id === contactId);
    if (index === -1) {
      return null;
    }
    const [contact] = list.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return contact;
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const list = await listContacts();
    const contact = { id: uuidv4(), name, email, phone };
    list.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return contact;
  } catch (error) {
    throw error;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };

