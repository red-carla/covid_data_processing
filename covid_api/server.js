const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const happinessRoutes = require('./routes/happinessRoutes');
const deathRoutes = require('./routes/deathRoutes');
const healthRoutes = require('./routes/healthRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/happiness', happinessRoutes);
app.use('/death', deathRoutes);
app.use('/health', healthRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
