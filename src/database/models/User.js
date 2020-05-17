
const Base = require('./Base');
class User extends Base{
	constructor(args = {}){
	super("USER")
	this._addColumn('email', 'EMAIL');
	this._addColumn('username', 'USERNAME');
	this._addColumn('password', 'PASSWORD');
	Object.assign(this, args);
	}
}

module.exports = User;