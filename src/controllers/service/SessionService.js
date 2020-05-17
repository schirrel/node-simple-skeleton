const TokenService = require('./TokenService');
const UserService = require('./UserService');
const service = new UserService();
class SessionService {
	static async authUser(usuario) {
	let result = await service.search(usuario);
	if(result && result.length) {
		let found = result[0];
			let chave = await TokenService.generateKey(found.id);
			return chave;
	}		
	
	return null;
	}

}

module.exports = SessionService;