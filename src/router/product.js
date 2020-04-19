module.exports = (() => {

	const service = require('../controllers/services/product');

	const logger = require('../utils/logger');

	const router = (app) => {

		app.post('/api/product', async function (req, res) {
			let result = service.save(req);
			res.send(result);
		});
		app.delete('/api/product/:id', async function (req, res) {
			let result = service.remove(req.params.id);
			res.send({ requested: 'ok', result: result });
		});
		app.put('/api/product', async function (req, res) {
			let result = service.update(req);
			res.send({ requested: 'ok', result: result });
		});
		app.get('/api/product/:id', async function (req, res) {
			let result = service.get(req.params.id);
			res.send({ requested: 'ok', result: result });
		});
		
		app.get('/api/product/spagination', async function (req, res) {
			logger.info(req.params);
			let result = service.get(req.params.id);
			res.send({ requested: 'ok', result: result });
		});
	}
	return {
		router: router
	}
})();