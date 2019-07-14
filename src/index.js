
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './db/config/environment';

const app = express(); // setup express application

app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the default Authors Haven API route',
}));

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});

export default app;
