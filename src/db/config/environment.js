import dotenv from 'dotenv';

dotenv.config();

let envConfig = {};

envConfig.db_username = process.env.DATABASE_USERNAME;
envConfig.db_password = process.env.DATABASE_PASSWORD;
envConfig.db_name = process.env.DATABASE_NAME;
envConfig.db_host = process.env.DATABASE_HOST;
envConfig.db_test_username = process.env.DATABASE_TEST_USERNAME;
envConfig.db_test_password = process.env.DATABASE_TEST_PASSWORD;
envConfig.db_test_name = process.env.DATABASE_TEST_NAME;
envConfig.db_test_host = process.env.DATABASE_TEST_HOST;

export default envConfig;
