const app = require('./server/app.js');
const db = require('./server/db/models').db;
const PORT = process.env.PORT || 1337;

db.sync({force: true})
.then(() => {
  app.listen(PORT, () => {
    console.log("listening on port" , PORT);
  });
});
