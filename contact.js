const fs = require("fs").promises; //  turn on module that helps to use promise

const path = require("path"); // helps to do correct path

const contactPath = path.join(__dirname, "./contacts.json"); // we have done correct path for different software sistema

const listContact = async () => {
  const res = await fs.readFile(contactPath, "utf-8");

  // fs returns promise and has methods and in result  will return buffer  we need to pars into normal data
  return JSON.parse(res);
};

const getContactById = async (id) => {
  const listContacts = await listContact();

  const getID = listContacts.find((contact) => contact.id === id);
  return getID || null;
};

const deleteContact = async (id) => {
  const listContacts = await listContact();
  const index = listContacts.findIndex((contact) => contact.id !== id);
  if (index !== -1) {
    return null;
  }

  // it  has not  finished yet
};

module.exports = {
  listContact,
  getContactById,
  deleteContact,
};
