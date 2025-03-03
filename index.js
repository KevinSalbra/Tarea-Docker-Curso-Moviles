const express = require('express');
const app = express();
const routes = require("./Routes/Rutas"); 



app.get("/", (req, res) => {
  res.send("Pagina inicial");
});

app.use("/api", routes);


const port = 3000;  
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
