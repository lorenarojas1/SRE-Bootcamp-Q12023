import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/prefer-default-export
export const config = {
  APP_PORT: process.env.APP_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOSTNAME: process.env.DB_HOSTNAME,
  DB_PORT: process.env.DB_PORT,
  DB_DATABASE: process.env.DB_DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TIME_EXPIRES: process.env.JWT_TIME_EXPIRES,
  JWT_COOKIE_EXPIRES: process.env.JWT_COOKIE_EXPIRES,
};
