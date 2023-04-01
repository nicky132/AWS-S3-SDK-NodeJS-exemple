// Variables de entorno
import env from "./config.js";
// Import required AWS SDK clients and commands for Node.js.
import { GetObjectCommand, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
// Conf AWS S3
import { s3Client } from "./libs/s3Client.js";
// File System
import fs from "fs";

// Read - Traer objetos de S3
export const readObjectS3 = async (files) => {
  try {
    // Parametros
    const readParams = {
      Bucket: env.bucket_name, 
      Key: files // Nombre del objeto en S3 
    };
    // Read
    const resultsRead = await s3Client.send(new GetObjectCommand(readParams));
    
    // Descarga las imagenes por paquete con .createWriteStream y las pone en otra carpeta
    resultsRead.Body.pipe(fs.createWriteStream("./downloads/newImage.png"));

    console.log(resultsRead);
    return resultsRead;

  } catch (error) {
    console.log("Error los parametros NO deben estar vacios", error);
  }

};

// Create / subir archivos a S3
export const createObjectS3 = async (files) => {
  // Create an object and upload it to the Amazon S3 bucket.
  // Create - Guardar un objeto / imagenes
  try {

    const createStreamed = fs.createReadStream(files.tempFilePath);

    const createParams = {
      Bucket: env.bucket_name, // The name of the bucket. For example, 'sample-bucket-101'.
      Key: files.name, // The name of the object. For example, 'sample_upload.txt'.
      Body: createStreamed, // The content of the object. For example, 'Hello world! or Images".
    };

    const resultsCreate = await s3Client.send(new PutObjectCommand(createParams));
    console.log(
        "Successfully created " +
        createParams.Key +
        " and uploaded it to " +
        createParams.Bucket +
        "/" +
        createParams.Key
    );
    
    console.log(resultsCreate);
    return resultsCreate;
    
  } catch (err) {
    console.log("Error los parametros NO deben estar vacios", err);
  }

};

// Delete Object
