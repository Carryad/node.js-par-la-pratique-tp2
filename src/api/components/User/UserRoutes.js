const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.route('/users')
    .get([
        UserController.readAll
    ])
    .post([
        UserController.createOne
    ])

router.route('/users/:id')
    .get([
        UserController.readOneById
    ])
    .patch([
        UserController.editOneById
    ])
    .delete([
        UserController.deleteOne
    ])

module.exports = router;