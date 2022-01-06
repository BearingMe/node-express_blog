// import libs
import express from 'express';
import path from 'path';

// import files
import homeRouter from './routes/home';
import aboutRouter from './routes/about';

// constants 
const app = express();
const port = process.env.PORT || 3000;

// load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// load static files
app.use(express.static(path.join(__dirname, 'public')));

// load routes 
app.use('/', homeRouter);
app.use('/about', aboutRouter);

// start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
