var express = require('express');
var router = express.Router();
const imageController = require('../controllers/image.controller')
const {image} = require("../libs/multer.libs")

router.post("/",  image.single("image"), imageController.add)
router.get("/", imageController.getAll)
router.get("/:id", imageController.getSingle)
router.put("/", imageController.update)
router.delete("/:id", imageController.delete)

module.exports = router;
