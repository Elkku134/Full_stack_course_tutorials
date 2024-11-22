import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import exp from 'constants';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFfound.js';
const app = express();
const port = process.env.PORT || 7000;

// Body parser middelware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);

// Setup static folder

// Routes
app.use('/api/posts', posts);
app.use(notFound)

// Error handelr
app.use(errorHandler);


app.listen(port, () => console.log(`server is running on port ${port}`));