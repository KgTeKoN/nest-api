import * as dotenv from 'dotenv';
dotenv.config();

const port = 5000;
const cipherAlgorithm = 'aes-256-cbc';
const secret = process.env.SECRET_KEY;
const pgConnectionHost = process.env.PG_CONNECTION_HOST;
const pgConnectionPort = process.env.PG_CONNECTION_PORT;
const pgConnectionUser = process.env.PG_CONNECTION_USER;
const pgConnectionPassword = process.env.PG_CONNECTION_PASSWORD;
const pgConnectionDB = process.env.PG_CONNECTION_DB;
const knexTableName = 'knex_migration';
const accessTokenKey = process.env.SECRET_KEY_ACCESS_TOKEN;
const refreshTokenKey = process.env.SECRET_KEY_REFRESH_TOKEN;

export { port, cipherAlgorithm, secret, pgConnectionHost,
  pgConnectionPort, pgConnectionUser, pgConnectionPassword, pgConnectionDB, knexTableName,
  accessTokenKey, refreshTokenKey }
