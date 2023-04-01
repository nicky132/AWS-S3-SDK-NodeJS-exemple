import env from "../config.js"; // Variables de entorno

// -------------------- Configuración de AWS S3

import { S3Client } from "@aws-sdk/client-s3";

// Set the AWS Region.
const REGION = env.bucket_region; //e.g. "us-east-2"

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ 
  region: REGION,
  credentials: {
    accessKeyId: env.public_key,
    secretAccessKey: env.secret_key,
  }
});

// Export
export { s3Client };
