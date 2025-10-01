import 'dotenv/config'; // dotenv ko ESM style me import
import app from './src/app.js'; // `.js` extension ESM ke liye zaruri

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
