const { getLogin } = require("../controllers/loginController");

//external imports
const router = require("express").Router();

//login page
router.get("/", getLogin);

module.exports = router;
