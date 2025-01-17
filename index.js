import express, { json } from 'express';
import { connect } from 'mongoose';
import userRoutes from './routes/user.routes';
import profileRoutes from './routes/profile.routes';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());

// Database connection
connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});