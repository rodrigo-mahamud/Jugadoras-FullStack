const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const jugadorasController = require("./controllers/jugadorasController");

mongoose.connect("mongodb://127.0.0.1/jugadoras", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
   console.log("Conectado a MongoDB");
});

app.use(express.json());
app.use(function (req, res, next) {
   // Website you wish to allow to connect
   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

   // Request methods you wish to allow
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

   // Request headers you wish to allow
   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader("Access-Control-Allow-Credentials", true);

   // Pass to next layer of middleware
   next();
});

app.listen(PORT, () => {
   console.log(`Servidor ejecutándose en http://127.0.0.1:${PORT}`);
});

const jugadorasRoutes = require("./routes/jugadoras");

app.use("/jugadoras", jugadorasRoutes);
// ...
app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
);
// Rutas
app.get("/jugadoras", jugadorasController.getJugadoras);
app.post("/jugadoras", jugadorasController.createJugadora);
app.get("/jugadoras/:id", jugadorasController.getJugadora);
app.put("/jugadoras/:id", jugadorasController.updateJugadora);
app.delete("/jugadoras/:id", jugadorasController.deleteJugadora);
