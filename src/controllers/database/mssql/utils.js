
module.exports = (() => {
	const sql = require("mssql");

	const getType = (value) => {
		let type = null;
		switch (typeof value) {
			case "string":
			case "object":
				type = sql.VarChar(1000);
			case "boolean":
			case "number":
				type = sql.Int;
			default:
				type = sql.VarChar;
		}
		return type;
	}


	const insertQueryBuilder = (tableName, params) => {
		let values = ' VALUES (';
		let myQuery = 'insert into ' + tableName + " (";
		let keys = Object.keys(params);
		let vals = [];
		let type = null;
		for (let i = 0; i < keys.length; i++) {
			let value = params[keys[i]];
			myQuery += '' + keys[i] + (i < keys.length - 1 ? ',' : ')');
			values += ("@" + keys[i]) + (i < keys.length - 1 ? ',' : ')');
			type = getType(value);
			vals.push({
				name: keys[i],
				value: value === true ? 1 : value === false ? 0 : value,
				type: type
			})
		}
		myQuery = myQuery.concat(values);

		return {
			string: myQuery,
			values: vals,
			getType: getType
		};
	}

	const updatetQueryBuilder = (tableName, params) => {
		let myQuery = 'UPDATE ' + tableName + " SET ";
		let keys = Object.keys(params).filter(k => k != 'id');
		let vals = [];
		let type = null;
		for (let i = 0; i < keys.length; i++) {
			let value = params[keys[i]];
			if (keys[i] != 'id') {
				myQuery += '' + (keys[i] + " = @" + keys[i]) + (i < keys.length - 1 ? ',' : '');
				type = getType(value);
				vals.push({
					name: '@' + keys[i],
					value: value === true ? 1 : value === false ? 0 : value,
					type: type
				})
			}
		}
		type = getType(params.id);
		myQuery += " where id = @id";
		vals.push({ name: '@id', value: params.id, type: type })

		return {
			string: myQuery,
			values: vals
		};
	}


	return {
		insertQueryBuilder: insertQueryBuilder,
		updatetQueryBuilder: updatetQueryBuilder,
		getType: getType
	};
})();