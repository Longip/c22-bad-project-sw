import Knex from 'knex';
const knexConfig = require('../knexfile');
export const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);