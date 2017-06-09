const path = require('path');
const Knex = require('knex');
const config = require('../../config');

const connection = {
	client: 'postgresql',
	connection: `${config.database.connectionString}${config.database.name}`,
	migrations: {
		directory: path.resolve(__dirname, '../../datastore/migrations'),
	}
};

module.exports = connection;