// imports
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

// controllers
// import blogController from './controllers/blogController.mjs';
// import productController from './controllers/productController.mjs';

// express app
const app = express();

// env variables
const PORT = process.env.PORT 
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;

// mongoDb connection
mongoose.connect(
  MONGODB_CONNECT_STRING,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to database.' });
    } else  {
        console.log('Success: Datatabse connection established.');
    }
});

// middleware
app.use(express.json());

// routes
// app.use('/api/blog', blogController);
// app.use('/api/order', productController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error in middleware!');
})

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});
