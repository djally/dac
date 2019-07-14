
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/api/index';

dotenv.config();
const app = express(); // setup express application

const port = process.env.PORT || 4000;

app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the default Authors Haven API route',
}));

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

export default app;
