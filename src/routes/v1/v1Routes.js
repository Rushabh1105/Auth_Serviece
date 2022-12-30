const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");
const {AuthRequestValidator} = require("../../middlewares/index");

router.post("/signup", AuthRequestValidator.validateUserSignup, UserController.createUser);
router.post("/signin", AuthRequestValidator.validateUserSignup, UserController.signIn);
router.get("/isauthenticated", UserController.isAuthinticated);
router.get("/dummy", (req, res) => {
    return res.status(200).json({
        message : "ok",
    })
})

module.exports = router;