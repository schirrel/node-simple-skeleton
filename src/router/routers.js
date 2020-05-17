
const router = require("express").Router();

router.use('/user', require("./UserRouter"))
router.use(require("./SessionRouter"))

module.exports = router;