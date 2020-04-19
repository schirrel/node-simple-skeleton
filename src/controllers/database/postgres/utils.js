
module.exports = (() => {

	insertQueryBuilder = (tableName, params) => {
		let values = ' VALUES (';
		let myQuery = 'insert into ' + tableName + " (";
		let keys = Object.keys(params);

		for (let i = 0; i < keys.length; i++) {
			myQuery += '' + keys[i] + (i < keys.length - 1 ? ',' : ')');
			values += ' $' + (i + 1) + (i < keys.length - 1 ? ',' : ')');
		}
		let arrayValues = Object.keys(params).map(function (key) {
			return params[key];
		});
		myQuery = myQuery.concat(values);

		return {
			string: myQuery,
			values: arrayValues
		};
	}

	updatetQueryBuilder = (tableName, params) => {
		let myQuery = 'UPDATE ' + tableName + " SET ";
		let keys = Object.keys(params).filter(k => k != 'id');
		let vals = [];
		for (let i = 0; i < keys.length; i++) {
			if (keys[i] != 'id') {
				myQuery += '' + (keys[i] + " = " + ' $' + (i + 1)) + (i < keys.length - 1 ? ',' : '');
				vals.push(params[keys[i]])
			}
		}

		myQuery += " where id = $" + (vals.length + 1);
		vals.push(params.id)

		return {
			string: myQuery,
			values: vals
		};
	}


	return {
		insertQueryBuilder: insertQueryBuilder,
		updatetQueryBuilder: updatetQueryBuilder
	};
})();