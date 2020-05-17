const Service = require('./Service');
const User = require('../../database/models/User');

class UserService extends Service {
	constructor () {
		super(User)
	}
}


module.exports = UserService;