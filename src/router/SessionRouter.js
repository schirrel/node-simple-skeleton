
let router = require("express").Router();
const SessionService = require('../controllers/service/SessionService');

router.post('/login', async (req, res) => {
	let credentials = req.body;
	let token = await SessionService.authUser(credentials);;	
	if(entity.erro) {
		res.status(500).send(credentials);
	} else	
	res.send(token);
});

module.exports = router;