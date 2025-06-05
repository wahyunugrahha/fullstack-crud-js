const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require('./config/Db');
const userRoutes = require('./routes/routes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
(async () => {
  try {
    await db.authenticate();
    console.log('Database Connected');
    await db.sync();
    console.log('Model Synced');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is http://localhost:${PORT}`);
});
