
module.exports = (() => {



	updatetQueryBuilder = (tableName, params, idString) => {
		let myQuery = 'UPDATE ' + tableName + " SET ";
		let keys = Object.keys(params).filter(k => k != 'id');
		let vals = [];
		for (let i = 0; i < keys.length; i++) {
			if (keys[i] != 'id') {
				myQuery += `${keys[i]} = '${params[keys[i]]}' ${i < keys.length - 1 ? ',' : ''}`;

			}
		}

		myQuery += " where id = " + (idString ? "'" + params.id + "'" : params.id);
		vals.push(params.id)

		return {
			string: myQuery,
			values: vals
		};
	}


	return {
		updatetQueryBuilder: updatetQueryBuilder
	};
})();