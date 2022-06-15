import {Sequelize} from 'sequelize-typescript';
// import { config } from './config/config';
import 'dotenv/config';
require('dotenv').config();


// const c = config.dev;
console.log(process.env.pass_word);
// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": process.env.user_name,
  "password": process.env.pass_word,
  "database": process.env.database,
  "host":     process.env.host,

  dialect: 'postgres',
  storage: ':memory:',
});

