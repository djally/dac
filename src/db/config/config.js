import envConfig from './environment';

const config = {
  development: {
    username: envConfig.db_username,
    password: envConfig.db_password,
    database: envConfig.db_name,
    host: envConfig.db_host,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: envConfig.db_test_username,
    password: envConfig.db_test_password,
    database: envConfig.db_test_name,
    host: envConfig.db_test_host,
    dialect: 'postgres',
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: 'postgres',
    operatorsAliases: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
};

module.exports = config;
