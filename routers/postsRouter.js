const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");
const { validationSchema } = require("../validations/validations");
const { checkSchema } = require("express-validator");


const validate = require("../middleware/validator");

router.get("/", postsController.index);
router.post("/", checkSchema(validationSchema), validate, postsController.create);
router.get("/:slug", checkSchema(validationSchema), validate, postsController.show);
router.put("/:slug", checkSchema(validationSchema), validate, postsController.update);
router.delete("/:slug", checkSchema(validationSchema), validate, postsController.destroy);

module.exports = router;
