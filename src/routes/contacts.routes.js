const router = require('express-promise-router')();
const contactsController = require('../controllers/contacts.controller.js');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/contacts
router.post('/contacts', contactsController.createContact);

module.exports = router;