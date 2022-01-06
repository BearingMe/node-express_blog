// import libs
import express from 'express';

// import files
import homeRouter from './routes/home';
import aboutRouter from './routes/about';

// main program
const app = express();
const port = process.env.PORT || 3000;

app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
