require("dotenv").config();
const server = require("./api/server");

const {Client} = require("pg")
const client = new Client ({
  user:"postgres",
  password:"postgres",
  host:"ian-fragoso",
  port: port,
  database:"./data/users.db3"
})

client.connect()
  .then(() => console.log("connected"))
  .then()
  .catch(e => console.log)
  .finaly(() => client.end(e))

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`\n* Server listening on Port: ${port} *\n`);
});