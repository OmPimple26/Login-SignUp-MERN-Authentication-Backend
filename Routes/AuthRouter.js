const router = require("express").Router();
const { signup, login } = require("../Controllers/AuthController");
const { signUpValidation, loginValidation } = require("../Middlewares/AuthValidation");

// router.post("/login", (req, res) => {
//     // Login logic here
//     res.send("Login successful");
// });

router.post("/login", loginValidation, login);

router.post("/signup", signUpValidation, signup);

module.exports = router;