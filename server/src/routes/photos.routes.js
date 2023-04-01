// Photo Routes
import { Router } from "express"; // Routes
const router = Router();
import * as s3 from "../s3.js"; // AWS s3

// Read
router.get('/', (req, res) => {
  res.send("Hola mundo");
});

// Create
router.post('/upload', async (req, res) => {
  try {
    console.log("Estas intentado subir una imagen: ")
    console.log(req.files);
    // Subir las imagenes
    const { photo } = req.files
    await s3.createObjectS3( photo );

    res.send("Imagen subida a AWS");
  } catch (error) {
    res.status(500).send("Error al subir la imagen en AWS");
    console.log(error);
  }
});

// Read by Name
router.get('/imagen/:name', async (req, res) => {
  
  try {

    await s3.readObjectS3(req.params.name);

    res.send("Archivo Descargado");

  } catch (error) {
    res.status(500).send("Algo salio mal");
    console.log(error);
  }

});

// Export
export default router;