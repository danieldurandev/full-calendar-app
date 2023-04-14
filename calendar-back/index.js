const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { dbConnection } = require("./database/config");
dotenv.config();

const app = express();
//Base de datos
dbConnection();
//Directorio publico
app.use(cors());

app.use(express.static("public"));
/** */
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
