const app = require('./server/app.js')
const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log("listening on port" , PORT);
});
