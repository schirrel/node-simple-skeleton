
const router = require("express").Router();

router.use('/user', require("./UserRouter"))

module.exports = router;