// import libs
import express from 'express';
import path from 'path';
import pug from 'pug';

// import files
import homeRouter from './routes/home';
import aboutRouter from './routes/about';

// main program
const app = express();
const port = process.env.PORT || 3000;

// load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// load routes 
app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
