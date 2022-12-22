import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import BrandRoutes from './routes/brandRoutes.js';
import InfluencerRoutes from './routes/influencerRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use(cors({origin: '*'}));

app.use('/api/brand', BrandRoutes);
app.use('/api/influencer', InfluencerRoutes);

app.get('/', (req, res) => {
    res.send('API is running....')
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
