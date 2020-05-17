const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class TokenService {

	static async generateKey(userId) {
		try {
	var token =
			await jwt.sign({
			data: userId
			}, process.env.SECRET, { expiresIn:`${process.env.TOKEN_VALIDATION}` });

			return token;
		} catch (err) {

			console.log(err)
		}
		
	}
}

module.exports = TokenService;