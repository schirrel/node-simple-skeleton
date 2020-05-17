
const logger = require('../../utils/logger');

class Service {
	constructor (table) {
		this.table = table;
		this.logger = logger;
	}
	async get(id) {
		const res = await this.db.query(`SELECT * FROM ${this.table.tableName} where ${this.table.colunas.id} = $1`, [id]);
        let response = await res.rows[0];
        return response || {};
	}
	async persist(persistObject){	
		try {
		const res = await this.db.query(persistObject.query, persistObject.values);
			return res;
		} catch(err) {  
			this.logger.error(err);
			err.erro = 'ERRO';
			return err;
		}
	}
	async save(model) 
	{
		let entity = new this.table(model);
		return await entity.save();
	}
	async update(model) {
		let entity = new this.table(model);
		return await entity.update();
	}
	
	async delete(id) {	
		// let entity = new this.table({id:id});
		// return await entity.delete();
		return await this.table.deleteById(id);
	}
	async list() {
        return await this.table.list() ;
	
	}

	async search(options) {
		return await this.table.search(options) ;
	
	}
	async paginate(options) 
	{
		//TODO
	}
}


module.exports = Service;