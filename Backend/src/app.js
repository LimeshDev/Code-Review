import express from 'express';
import aiRoutes from './routes/ai.routes.js'; 
import cors from 'cors';

const app = express();

// CORS configuration: sirf frontend URL allow karenge
app.use(cors({
  origin: 'https://code-review-38gf-git-main-limesh-kumar-dewangans-projects.vercel.app/'  // Apna frontend URL yahan daalo
}));

// Body parser
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// AI routes
app.use('/ai', aiRoutes);

export default app;
