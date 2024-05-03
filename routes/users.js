var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

router.post("/", userController.register)
router.put("/:id/profile", userController.update)

module.exports = router;
