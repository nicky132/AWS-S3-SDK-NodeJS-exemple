import "./config.js"; // Environtment Variables
import app from "./app.js"; // Express

// Servidor
app.listen(app.get('port'), () => {
  console.log("Servidor corriendo en el puerto: " + app.get('port'));
});