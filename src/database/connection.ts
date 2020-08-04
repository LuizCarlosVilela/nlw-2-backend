import knex from 'knex';

const knexfile = require("../../knexfile.ts");

const db = knex(knexfile);

export default db;