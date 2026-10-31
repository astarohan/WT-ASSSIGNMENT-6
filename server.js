require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => console.log(`Student Records API running on port ${PORT}`));
}).catch(error => {
  console.error('Database connection failed:', error.message);
  process.exit(1);
});
