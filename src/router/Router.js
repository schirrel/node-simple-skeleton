const LOGGER = require('../utils/logger');
const autenticacao = require('./middleware/AutenticacaoMiddleware');

class Router {
	constructor(app,isAuth) {

		this.app = app;
		this.logger = LOGGER;
		if(isAuth) {
			this.app.use(autenticacao);	
		}
	}


	get(path, callback) {
		this.app.get(path,(req,res,next)=>{
			callback(req,res,next)
		});
	}

	post (path, callback){
		this.app.post(path,(req,res,next)=>{
			callback(req,res, next)
		});
	}

}

module.exports = Router;