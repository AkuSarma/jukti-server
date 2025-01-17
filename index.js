import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import userRoutes from './routes/user.routes.js';
import profileRoutes from './routes/profile.routes.js';
import pgRoutes from './routes/pg.routes.js';

config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(json());

// Database connection
await connect(process.env.DB_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/pgs', pgRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});