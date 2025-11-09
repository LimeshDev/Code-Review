import 'dotenv/config';          // dotenv ESM style
import app from './src/app.js';  // Express app
import serverless from 'serverless-http'; 

// Export serverless handler instead of app.listen()
export const handler = serverless(app);
