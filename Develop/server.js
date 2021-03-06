const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// DONE import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(require('./routes/api/category-routes'));
app.use(require('./routes/api/product-routes'));
app.use(require('./routes/api/tag-routes'));

// DONE sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  });
});
