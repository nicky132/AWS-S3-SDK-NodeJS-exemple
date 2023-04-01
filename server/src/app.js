import express from 'express'; // Express
const app = express();
import morgan from 'morgan'; // Ver peticiones
import fileUpload from 'express-fileupload'; // Img
import photoRoutes from './routes/photos.routes.js' // Photo Routes
import env from './config.js' // Variables de entorno
import cors from 'cors'; // CORS

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
  // cors
  app.use(cors({
    origin: 'http://localhost:5173'
  }));
  // Img
  app.use(fileUpload({
    useTempFiles: true, // Archivos temporales
    tempFileDir: './uploads' // Ruta de los temp
  }));

// Routes
app.use(photoRoutes);

// Estatic Files
app.use(express.static("downloads"));

// Port
app.set('port', env.port);

// Export
export default app;