import express, { json } from 'express'
import morgan from 'morgan'

const app = express();

// Import routes
import aditionRoutes from './routes/adtions';

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/aditions', aditionRoutes);

export default app;