const TokenService = require('./TokenService');
const service = new require('./UserService')();
class SessionService {
	static async autenticar(usuario) {
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